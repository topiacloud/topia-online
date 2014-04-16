// A wrapper for manipulating canvas DOM elements.
define(["./document"], function (doc) {

    var Canvas = function (options) {
        this.canvas = null;
        this.offscreen = options.offscreen;
        this.id = "canvas" + options.id;
    };

    Canvas.prototype = {
        
        init: function (options) {

            this.x = options.x || 0;
            this.y = options.y || 0;

            if (options.maximized) {
                this.maximize();
            } else {
                this.width = options.width || 0;
                this.height = options.height || 0;
            }
        },

        exists: function () {
            if (this.offscreen) {
                return this.canvas != null;
            }

            return this.getElement().length > 0;
        },

        getElement: function () {
            if (this.offscreen) {
                return this.canvas;
            }

            return $("#" + this.id);
        },

        getOrCreate: function () {
            return this.exists() ? this.getElement() : this.create();
        },

        create: function() {
            return this.canvas = document.createElement("canvas");
        },

        append: function (parent) {
            var element = this.getOrCreate();

            if (this.id) {
                element.id = this.id;
            }

            if (this.offscreen) {
                return false;
            }

            $(parent || "body").append(element);
            return true;
        },

        getContext: function () {
            if (!this._context) {
                var element = this.getElement();

                if (this.offscreen && element) {
                    this._context = element.getContext("2d");
                }
                else if (element.length > 0) {
                    this._context = element[0].getContext("2d");
                }
            }

            return this._context;
        },

        maximize: function () {
            var size = doc.getSize();
            this.width = size[0];
            this.height = size[1];
        },

        setOrigin: function (x, y) {
            this.origin.x = x;
            this.origin.y = y;

            this.translate(parseInt(x * this.width), parseInt(y * this.height));
        },

        translate: function (x, y) {
            this.translate.x += x;
            this.translate.y += y;

            this.context.translate(x, y);
        },

        clear: function () {
            var element = this.getElement()[0];

            this.context.clearRect(0, 0, element.width, element.height);
        },

        get x() {
            return this.getElement().offset().left;
        },

        set x(value) {
            var element = this.getElement();

            if (element.length) {
                element.css("left", value + "px");
            }
        },

        get y() {
            return this.getElement().offset().top;
        },

        set y(value) {
            var element = this.getElement();

            if (element.length) {
                element.css("top", value + "px");
            }
        },

        get width() {
            if (this.offscreen) {
                if (!this.canvas) {
                    return 0;
                }

                return this.canvas.width;
            }

            var element = this.getElement();

            if (element.length) {
                return element[0].width;
            }

            return 0;
        },

        set width(value) {
            if (this.offscreen) {
                if (!this.canvas) {
                    return;
                }

                this.canvas.width = value;
                return;
            }

            var element = this.getElement();

            if (element.length && value != this.width) {
                element[0].width = value;
            }
        },

        get height() {
            if (this.offscreen) {
                if (!this.canvas) {
                    return 0;
                }

                return this.canvas.height;
            }

            var element = this.getElement();

            if (element.length) {
                return element[0].height;
            }

            return 0;
        },

        set height(value) {
            if (this.offscreen) {
                if (!this.canvas) {
                    return;
                }

                this.canvas.height = value;
                return;
            }

            var element = this.getElement();

            if (element.length && value != this.height) {
                element[0].height = value;
            }
        },

        get center() {
            return [this.width / 2, this.height / 2];
        },

        get position() {
            var element = this.getElement();

            if (element.length) {
                var offset = element.offset();

                return [offset.left, offset.top];
            }

            return [0, 0];
        },

        fill: function (style, bounds) {

            if (!bounds) {
                bounds = [0, 0, this.width, this.height];
            }

            if (this._context) {
                this._context.fillStyle = style.toString();
                this._context.fillRect(bounds[0], bounds[1], bounds[0] + bounds[2], bounds[1] + bounds[3]);
            }
        }
    };

    return Canvas;
});