define(["data", "../common/ajax"], function(data, ajax) {

    var images = data("image");
    var animations = data("animation");
    var animationFrames = data("animation-frame");

    animations.on("save", function(animation) {

        // Cancel existing animations
        var existingAnimations = animations.get({ sprite: animation.sprite });

        if (existingAnimations.length > 1) {
            var existing = _.filter(existingAnimations, function(each) { return each.id != animation.id; });

            animations.remove(existing);
        }

        if (animation.frames) {
            return;
        }

        // Load JSON frames
        if (animation.path.indexOf(".json") >= 0) {

            var path = animation.path.substring(0, animation.path.lastIndexOf("/") + 1);
            var existingFrames = animationFrames.get({ path: path });

            if (existingFrames.length) {
                animation.frames = existingFrames.length;
                animation.path = path;
                animation.save();
                return;
            }

            var segments = animation.path.split("/");
            var filename = segments[segments.length - 1].replace(".json", ".png");

            ajax.json(animation.path).done(function(json) {
                _.each(json.frames, function(each) {

                    var newFrame = {
                        index: parseInt(each.filename.split(".")[0]),
                        path: path,
                        name: filename,
                        isAtlas: true,
                        x: each.frame.x,
                        y: each.frame.y,
                        width: each.frame.w,
                        height: each.frame.h,
                        trimmed: each.trimmed,
                        sourceX: each.spriteSourceSize.x,
                        sourceY: each.spriteSourceSize.y,
                        sourceSizeWidth: each.sourceSize.w,
                        sourceSizeHeight: each.sourceSize.h
                    };

                    animationFrames.save(newFrame);
                });

                animation.path = path;
                animation.save();
            });

            return;
        }

        var frames = animationFrames.get({ path: animation.path });

        if (frames.length) {
            animation.frames = frames.length;
        }

        if (!frames.length) {
            throw "Animation created without any frame data: " + animation.path;
        }

        animation.frames = frames.length;
    });

    // Todo:  Use frame handler
    /*animations.on("frame", function(animation) {
        
        console.log(animation.frame);

        if (animation.sprite) {
            
        }
    });*/


    // Preload images associated with animation frames
    animationFrames.on("save", function(animationFrame) {

        var imageUrl = animationFrame.path + animationFrame.name;

        // Preload each animation frame
        var image = data("image").first({ url: imageUrl }) || data("image").save({ url: imageUrl, isAtlas: animationFrame.isAtlas || false });

        animationFrame.image = image.id;
        animationFrame.isLoaded = image.isLoaded;
    });

    // Associate loaded images with animation frames
    images.on("save", function(image) {
        if (image.isLoaded) {
            animationFrames.each({ image: image.id }, function(each) {
                each.isLoaded = image.isLoaded;
            });
        }
    });

    // Todo:  Animation could use a generic 'motion' against its properties
    data("frame").on("save", function(frame) {
        animations.each(function(animation) {

            animation.time += frame.delta;

            if (!animation.repeat && animation.time >= animation.duration) {
                animations.remove(animation);
                return;
            }

            var currentFrame = parseInt((animation.time % animation.duration) / (animation.duration / animation.frames)) + 1;

            if (currentFrame != animation.frame) {
                animation.frame = currentFrame;

                // Todo:  Use frame handler instead
                if (animation.sprite) {
                    var animationFrame = animationFrames.first({ path: animation.path, index: animation.frame });

                    if (!animationFrame || !animationFrame.isLoaded) {
                        //throw "Invalid animation frame: " + animation.path + animation.frame + " (time: " + animation.time + ")";
                        return;
                    }

                    var sprite = data("sprite").get(animation.sprite);
                    sprite.image = animationFrame.path + animationFrame.name;

                    if (animationFrame.isAtlas) {
                        sprite.isAtlas = true;
                        sprite.width = animationFrame.width;
                        sprite.height = animationFrame.height;
                        sprite.xOffset = animationFrame.sourceX;
                        sprite.yOffset = animationFrame.sourceY;
                        sprite.frameX = animationFrame.x;
                        sprite.frameY = animationFrame.y;
                        sprite.sourceSizeWidth = animationFrame.sourceSizeWidth;
                        sprite.sourceSizeHeight = animationFrame.sourceSizeHeight;
                        sprite.sourceX = animationFrame.sourceX;
                        sprite.sourceY = animationFrame.sourceY;
                    }

                    sprite.save();
                }
            }

            //animation.save();
        });
    });
});