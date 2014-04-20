(function() {
    Topia.Skill.Digging = {
        description: "Allows you to dig dirt mounds, which can progress to trenches and roads.",
        level: 1,
        rarity: 0,
        properties: [
            {
                text: "Enables dirt mound digging.",
                description: "You can create a dirt mound by using a shovel."
            },
            {
                text: "Improved shovel efficiency.",
                description: "Improves the speed and efficiency of all projects involving a shovel."
            }
        ],
        prefixes: [
            {
                name: "Stealth",
                description: "You can dig and bury objects without others noticing."
            },
            {
                name: "Agricultural",
                description: "Your dirt mounds increase plant quality."
            },
            {
                name: "Labored",
                description: "Digging causes you to tire faster than usual.",
                discount: true
            }
        ],
        modifiers: [
            {
                name: "Sturdy",
                description: "Your dirt creations are more durable."
            },
            {
                name: "Efficient",
                description: "You dig faster than others."
            },
            {
                name: "Regulated",
                description: "Your maintain your shovel while digging to decrease wear and tear."
            }
        ]
    };
})();