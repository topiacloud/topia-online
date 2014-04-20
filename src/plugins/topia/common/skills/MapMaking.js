(function() {

    Topia.Skill.MapMaking = {
        description: "You are able to create maps of explored areas.",
        level: 4,
        rarity: 4,
        type: { exploration: 5, literacy: 2 },
        properties: [
            {
                text: "Enables map creation.",
                description: "You can craft maps using paper and ink."
            }
        ],
        prefixes: [
            {
                name: "Treasure",
                description: "Maps that you create will reveal locations of buried treasure."
            }
        ],
        modifiers: [
            {
                name: "Explorer",
                description: "Increases map exploration radius."
            },
            {
                name: "Accuracy",
                description: "Increases crafted map details."
            }
        ]
    };
})();