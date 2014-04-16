(function () {
    
    Topia.Skill.Throwing = {
        description: "Allows you to throw objects a certain distance from you.",
        level: 2,
        rarity: 1,
        properties: [
            {
                text: "Enables throwing objects.",
                description: "You can throw objects of certain properties, which may cause damage to targets."
            }
        ],
        prefixes: [
            {
                name: "Precise",
                description: "You rarely miss when throwing objects."
            },
            {
                name: "Power",
                description: "You throw objects much harder than others, but sometimes miss your target."
            },
            {
                name: "Clumsy",
                description: "Sometimes you drop objects you are attempting to throw.",
                discount: true
            }
        ],
        modifiers: [
            {
                name: "Catching",
                description: "You can occasionally catch objects thrown at you."
            },
            {
                name: "Speed",
                description: "You can throw objects faster than normal."
            },
            {
                name: "Accurate",
                description: "You are more accurate when throwing."
            }
        ]
    };
})();