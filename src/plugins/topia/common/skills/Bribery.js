(function () {
    
    Topia.Skill.Bribery = {
        description: "Allows you to forcefully purchase assets using influence.",
        level: 5,
        rarity: 5,
        properties: [
            {
                text: "Enables the 'bribe' action.",
                description: "The bribe action is available to forcefully purchase certain assets, such as land."
            }
        ],
        prefixes: [
            {
                name: "Subtle",
                description: "Reduces the likelyhood of the bribe being recognized."
            },
            {
                name: "Persuasive",
                description: "Increases the likelyhood of success during a bribe."
            }
        ],
        modifiers: [
            {
                name: "Coercive",
                description: "Slightly decreases the influence cost of bribery."
            },
            {
                name: "Intimidating",
                description: "Reduces the influence cost of bribery based on your infamy."
            }
        ]
    };
})();