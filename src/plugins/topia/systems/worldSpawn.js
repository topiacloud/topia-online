//This system handles spawning objects in the game world.
define(["data"], function () {

    //To check the distance between two objects (a monument and a tree, for instance).
    function DistanceCheck (obj1, obj2) {
        
            var xDistance = (obj1.x - obj2.x);
            xDistance = xDistance * xDistance;

            var yDistance = (obj1.y - obj2.y);
            yDistance = yDistance * yDistance;

            var totalDistance = parseInt(Math.sqrt(xDistance + yDistance));

            return totalDistance;
    };

    //To get a random point in the radius of a monument.
    function RandomPoint (radius, x, y) {
     
            var distance = (radius * Math.sqrt(Math.random()));
            var angle = 2 * Math.PI * Math.random();
     
            var x = parseInt(distance * Math.cos(angle) + x);
            var y = parseInt(distance * Math.sin(angle) + y);
     
            return { x: x, y: y };
    };

    //The function to get the number of trees within a monument's influence.
    function CurrentTrees (monumentId) {
        //Set a counter.
        var count = 0;
        //Get the monument we're talking about.
        var monument = data.topia.monument.get(monumentId);

        //Iterate through each actor.
        data.topia.actor.each(function (actor) {
            //If they are a tree.
            if (actor.name == "a tree") {
                //Make a distance check between the tree and the monument.
                var treeDistance = DistanceCheck(actor, monument);

                //If the distance is less than or equal to the radius.
                if (treeDistance <= monument.radius) {
                    //That's a tree within the radius of the monument.
                    count++;
                };
            };
        });
        //Return the total number of trees in the monument's radius.
        return count;
    };

    //The function to get the number of rocks within a monument's influence.
    function CurrentRocks (monumentId) {
        //Set a counter.
        var count = 0;
        //Get the monument we're talking about.
        var monument = data.topia.monument.get(monumentId);

        //Iterate through each item.
        data.topia.item.each(function (item) {
            //If they are a rock.
            if (item.name == "a rock") {
                //Make a distance check between the rock and the monument.
                var rockDistance = DistanceCheck(item, monument);

                //If the distance is less than or equal to the radius.
                if (rockDistance <= monument.radius) {
                    //That's a rock within the radius of the monument.
                    count++
                };
            };
        });
        //Return the total number of rocks in the monument's radius.
        return count;
    };

    //The function to get the number of iron nodes within a monument's influence.
    function CurrentNodes (monumentId) {
        //Set a counter.
        var count = 0;
        //Get the monument we're talking about.
        var monument = data.topia.monument.get(monumentId);

        //Iterate through each actor.
        data.topia.actor.each(function (actor) {
            //If they are an iron node.
            if (actor.name == "iron node") {
                //Make a distance check between the node and the monument.
                var nodeDistance = DistanceCheck(actor, monument);

                //If the distance is less than or equal to the radius.
                if (nodeDistance <= monument.radius) {
                    //That's a node within the radius of the monument.
                    count++
                };
            };
        });
        //Return the total number of rocks in the monument's radius.
        return count;
    };

    function GetClosestMonument (obj) {
        var lowestDistance = 9000;
        var closestMonument;

        data.topia.monument.each(function (monument) {
            var distance = DistanceCheck(obj, monument);

            if (distance < lowestDistance) {
                closestMonument = monument.id;
            };
        });

        return closestMonument;
    };

    //When a biome is assigned to a monument.
    data.topia.biome.on("monument", function (biome) {

        //Get the monument.
        var monument = data.topia.monument.get(biome.monument);
        //Get the max amount of trees in the biome with some variance.
        var treeVariant = (biome.trees+(Math.floor((Math.random()*2)+1)));
        //Get the max amount of plant clutter in the biome with some variance.
        var plantVariant = (biome.clutter+(Math.floor((Math.random()*10)+1)));
        //Get the max amount of mineral nodes in the biome.
        var mineralVariant = (biome.minerals+(Math.floor((Math.random()*2)+1)));
        //Get the max amount of rocks laying around in the biome, with variance.
        var rockVariant = (biome.minerals+(Math.floor((Math.random()*5)+1)));
        //This will be 0 for a newly created biome.
        var currentTrees = CurrentTrees(monument.id);
        //We assume there is no clutter at all in a new biome.
        var currentClutter = 0;
        //We assume there are no rocks in a new biome.
        var currentRocks = CurrentRocks(monument.id);
        //We assume there are no mineral nodes in a new biome.
        var currentNodes = CurrentNodes(monument.id);
        //Spawn trees according to how many are currently here vs how many there should be.
        var treeSpawn = function (currentTrees)  {
            //As long as we haven't hit the tree limit.
            for(t=currentTrees; t<treeVariant; t++) {
                var valid = false;
           
                while (valid == false) {
                    var spawnPoint = RandomPoint(monument.radius, monument.x, monument.y);
                    valid = true;
                    data.topia.actor.each(function (actor) {
                        if (actor.name == "a tree") {
                            if (actor.x != spawnPoint.x && actor.y != spawnPoint.y) {
                                var distance = DistanceCheck(spawnPoint, actor);
                                if (distance < 80) {
                                    console.log("Not valid.");
                                    valid = false;
                                };
                            };
                        };
                    });
     
                    if (valid == true) {
                        data.topia.actor.add({ name: "a tree", type: "tree", x: spawnPoint.x, y: spawnPoint.y });
                    };
                };
            };
        };
        //Spawn clutter according to how many are currently here vs how many there should be.
        var clutterSpawn = function (currentClutter) {
            //As long as we haven't hit the plant limit.
            for (p=currentClutter; p<plantVariant; p++) {
                //Generate a spawn point for each plant.
                var spawnPoint = RandomPoint(monument.radius, monument.x, monument.y);
                //Pick a random plant to populate the point.
                var randomClutter = Math.floor((Math.random()*4)+1);

                //Place the plant on the spawn point.
                if (randomClutter == 1) {
                    data.sprite.add({ image: "content/assets/game/environment/flower1.png", x: spawnPoint.x, y: spawnPoint.y });
                };

                if (randomClutter == 2) {
                    data.sprite.add({ image: "content/assets/game/environment/flower2.png", x: spawnPoint.x, y: spawnPoint.y });
                };

                if (randomClutter == 3) {
                    data.sprite.add({ image: "content/assets/game/environment/flower3.png", x: spawnPoint.x, y: spawnPoint.y });
                };

                if (randomClutter == 4) {
                    data.sprite.add({ image: "content/assets/game/environment/flower5.png", x: spawnPoint.x, y: spawnPoint.y });
                };
            };
        };
        //Spawn rocks according to how many are currently here vs how many there should be.
        var rockSpawn = function (currentRocks) {
            //As long as we haven't hit the rock limit.
            for (r=currentRocks; r<rockVariant; r++) {
                var valid = false;
           
                while (valid == false) {
                    var spawnPoint = RandomPoint(monument.radius, monument.x, monument.y);
                   
                    valid = true;
                    data.topia.item.each(function (item) {
                        if (item.name == "a rock") {
                            if (item.x != spawnPoint.x && item.y != spawnPoint.y) {
                                var distance = DistanceCheck(spawnPoint, item);
                                if (distance < 80) {
                                    console.log("Not valid.");
                                    valid = false;
                                };
                            };
                        };
                    });
     
                    if (valid == true) {
                        data.topia.item.add({ name: "a rock", type: "rock", x: spawnPoint.x, y: spawnPoint.y });
                    };
                };
            };
        };
        //Spawn mineral nodes according to how many are currently here vs how many there should be.
        var mineralSpawn = function (currentNodes) {
          //As long as we haven't hit the mineral node limit.
            for (m=0; m<mineralVariant; m++) {
                var valid = false;
           
                while (valid == false) {
                    var spawnPoint = RandomPoint(monument.radius, monument.x, monument.y);
                   
                    valid = true;
                    data.topia.actor.each(function (actor) {
                        if (actor.name == "iron node") {
                            if (actor.x != spawnPoint.x && actor.y != spawnPoint.y) {
                                var distance = DistanceCheck(spawnPoint, actor);
                                if (distance < 80) {
                                    console.log("Not valid.");
                                    valid = false;
                                };
                            };
                        };
                    });
     
                    if (valid == true) {
                        data.topia.actor.add({ name: "iron node", type: "iron node", x: spawnPoint.x, y: spawnPoint.y });
                    };
                };
            }; 
        };

        //Since this is a fresh biome, we execute our spawn functions to populate the area.
        treeSpawn(currentTrees);
        clutterSpawn(currentClutter);
        rockSpawn(currentRocks);
        mineralSpawn(currentNodes);

        data.topia.actor.on("remove", function (actor) {
            if (actor.type == "tree") {
                monumentId = GetClosestMonument(actor);
                currentTrees = CurrentTrees(monumentId);
                monument = data.topia.monument.get(monumentId);

                treeSpawn(currentTrees);
            };

            if (actor.type == "iron node") {
                monumentId = GetClosestMonument(actor);
                currentNodes = CurrentNodes(monumentId);
                monument = data.topia.monument.get(monumentId);

                mineralSpawn(currentNodes);
            };
        });

        data.topia.item.on("remove", function (item) {
            if (item.name == "a rock") {
                monumentId = GetClosestMonument(item);
                currentRocks = CurrentRocks(monumentId);
                monument = data.topia.monument.get(monumentId);

                rockSpawn(currentRocks);
            };
        });  
    });
});