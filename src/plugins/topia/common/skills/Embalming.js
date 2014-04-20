(function() {

    Topia.Skill.Embalming = {
        description: "A more sanitary form of preservation, embalming is the process of pumping a corpse with fluid to prevent it from rotting.",
        level: 5,
        rarity: 5,
        type: { knowledge: 3, death: 3, medical: 3 },
        properties: [
            {
                text: "Enables embalming.",
                description: "You may now use the embalming action on an entity to fill it with embalming fluid."
            }
        ],
        prefixes: [
            {
                name: "Necromantic",
                description: "Improves your necromancy arts."
            }
        ],
        modifiers: [
            {
                name: "Preservation",
                description: "Increases the potency of embalming."
            }
        ]
    };
})();