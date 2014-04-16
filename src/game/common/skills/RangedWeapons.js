(function () {
    
    Topia.Skill.RangedWeapons = {
        description: "Greatly improves your proficiency with ranged weapons, including weapons meant for throwing.",
        level: 3,
        rarity: 3,
        properties: [
            {
                text: "Ranged weapon proficiency.",
                description: "Your damage and accuracy with ranged weapons is greatly increased."
            }
        ],
        prefixes: [
            {
                name: "Stealthy",
                description: "You can fire certain ranged weaponry without others noticing."
            },
            {
                name: "Advanced",
                description: "You are more proficient with complex ranged weaponry, such as spring-loaded crossbows."
            },
            {
                name: "Primitive",
                description: "You are more proficient with primitive ranged weaponry, such as bows."
            }
        ],
        modifiers: [
            {
                name: "Hawkeye",
                description: "Your accuracy with ranged weapons is increased."
            },
            {
                name: "Heartseeker",
                description: "Your chance to cause serious wounds with ranged weapons is increased."
            }
        ]
    };
})();