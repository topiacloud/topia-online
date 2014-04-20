(function() {

    Topia.Skill.Exploration = {
        description: "Exploration is the ability to identify or recognize places of interest.",
        level: 2,
        rarity: 1,
        type: { exploration: 5 },
        properties: [
            {
                text: "Enables landmark identification.",
                description: "You can create landmarks or identify landmarks others have created."
            },
            {
                text: "Define waypoints.",
                description: "You can add waypoints to road networks and maps."
            }
        ],
        prefixes: [
        ],
        modifiers: [
            {
                name: "Vision",
                description: "Slightly increases sight radius."
            }
        ]
    };
})();