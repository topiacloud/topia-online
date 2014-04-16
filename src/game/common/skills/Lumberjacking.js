(function () {
    
    Topia.Skill.Lumberjacking = {
        description: "Lumberjacking allows you to chop and harvest wood from trees.",
        level: 1,
        rarity: 0,
        properties: [
            {
                text: "Enables tree chopping.",
                description: "Hold an axe and use it on a tree to chop the tree down."
            },
            {
                text: "Enables lumber harvesting.",
                description: "Use an axe to cut a fallen tree into usable lumber."
            }
        ],
        prefixes: [
            {
                name: "Careless",
                description: "You can chop trees faster than others, but you are prone to injury."
            },
            {
                name: "Efficient",
                description: "You can harvest additional resources from trees."
            },
            {
                name: "Combat",
                description: "Trees that you chop will fall and damage opponents."
            }
        ],
        modifiers: [
            {
                name: "Swift",
                description: "You can fell trees faster than others."
            },
            {
                name: "Cautious",
                description: "You are less prone to injury when lumberjacking."
            },
            {
                name: "Regulated",
                description: "Your maintain your axe while lumberjacking to decrease wear and tear."
            }
        ]
    };
})();