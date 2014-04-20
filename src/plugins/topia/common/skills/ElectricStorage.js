(function() {

    Topia.Skill.ElectricStorage = {
        description: "Storing electricity can be practical for many applications.",
        level: 5,
        rarity: 6,
        type: { science: 4, technology: 4 },
        properties: [
            {
                text: "Enables crafting options involving electrical storage.",
                description: "Allows the crafting of special containers used for storing and transporting electrical currents."
            }
        ],
        prefixes: [
            {
                name: "Volatile",
                description: "Your storage device can store additional energy, but is prone to 'instability'."
            },
            {
                name: "Arcane",
                description: "You can craft arcane devices for energy storage.  Also improves your lightning proficiencies."
            }
        ],
        modifiers: [
            {
                name: "Efficiency",
                description: "Reduces the number of resources required to craft electric storage devices."
            }
        ]
    };
})();