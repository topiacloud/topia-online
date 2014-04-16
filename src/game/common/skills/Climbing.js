(function () {
    
    Topia.Skill.Climbing = {
        description: "Allows you to climb certain objects, such as trees or walls.",
        level: 3,
        rarity: 1,
        properties: [
            {
                text: "Enables climbing and improves efficiency.",
                description: "You can climb certain objects using the 'climb' action."
            }
        ],
        prefixes: [
            {
                name: "Tree",
                description: "You are an expert at climbing trees."
            },
            {
                name: "Wall",
                description: "You are an expert at climbing walls."
            },
            {
                name: "Clumsy",
                description: "You fall more frequently than others.",
                discount: true
            }
        ],
        modifiers: [
            {
                name: "Concealment",
                description: "You can often hide yourself when climbed."
            },
            {
                name: "Cautious",
                description: "You have greater success when climbing and dismounting."
            },
            {
                name: "Swift",
                description: "You can climb very quickly."
            }
        ]
    };
})();