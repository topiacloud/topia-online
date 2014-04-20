(function() {

    Topia.Skill.AirMagic = {
        description: "Air magic is an arcane school that enables the manipulation of wind and storm.",
        level: 5,
        rarity: 5,
        type: { magic: 5 },
        properties: [
            {
                text: "Air magic spell proficiency.",
                description: "Your damage and accuracy with air spells is greatly increased."
            },
            {
                text: "Ranged weapon proficiency.",
                description: "Your damage and accuracy with ranged weapons is greatly increased."
            },
            {
                text: "Arcane magic proficiency.",
                description: "Air magic benefits from arcane magic disciplines."
            },
            {
                text: "Unpredictable forces.",
                description: "The results of air magic can be unpredictable."
            },
            {
                text: "Weather dependency.",
                description: "Wielding air magic can be difficult or impossible in certain environments."
            }
        ],
        prefixes: [
            {
                name: "Thunderous",
                description: "You are more proficient at wielding the power of storms and thunder."
            },
            {
                name: "Controlled",
                description: "Your air magic spells are predictable and controlled."
            },
            {
                name: "Fabricated",
                description: "You can use air magic in any environment, though it is not as strong in certain ones."
            }
        ],
        modifiers: [
            {
                name: "Powerful",
                description: "Your air magic is more potent."
            },
            {
                name: "Efficient",
                description: "Your air magic consumes less resources than usual."
            },
            {
                name: "Arcane",
                description: "Your air magic increases your overall arcane power."
            }
        ]
    };
})();