(function() {

    Topia.Skill.PlantIdentification = {
        description: "You can identify the properties of plants in the world.",
        level: 2,
        rarity: 5,
        type: { exploration: 5, knowledge: 4 },
        properties: [
            {
                text: "Improves plant visibility.",
                description: "You can locate plants that other individuals may not see."
            },
            {
                text: "Improves plant identification.",
                description: "You can see additional properties and details about plants."
            }
        ],
        prefixes: [
            {
                name: "Poisonous",
                description: "Improves your chance to locate poisonous plants."
            },
            {
                name: "Curative",
                description: "Improves your chance to locate curative plants."
            }
        ],
        modifiers: [
            {
                name: "Keen",
                description: "Further increases chance to find plants."
            }
        ]
    };
})();