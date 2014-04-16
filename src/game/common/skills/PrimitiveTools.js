(function () {
    
    Topia.Skill.PrimitiveTools = {
        description: "You have a good understanding of primitive tools and how they are fashioned.",
        level: 2,
        rarity: 1,
        properties: [
            {
                text: "Primitive tool efficiency.",
                description: "You are much better at using and creating primitive tools."
            }
        ],
        prefixes: [
            {
                name: "Salvage",
                description: "You can sometimes fashion primitive tools without consuming all of the resources."
            },
            {
                name: "Astute",
                description: "You can sometimes produce extra primitive tools."
            }
        ],
        modifiers: [
            {
                name: "Quick",
                description: "You can use and craft primitive tools faster than usual."
            },
            {
                name: "Pristine",
                description: "You craft higher quality primitive tools than others."
            },
            {
                name: "Maintenance",
                description: "Reduces durability loss when using primitive tools."
            }
        ]
    };
})();