(function() {

    Topia.Skill.AnatomicalTheory = {
        description: "Understanding the inner workings of a living organism is vital in helping them - or harming them.",
        level: 4,
        rarity: 4,
        type: { social: 3, medical: 3 },
        properties: [
            {
                text: "Enables checking for vital signs.",
                description: "You can check the vital signs of others to evaluate their condition."
            },
            {
                text: "Enables advanced targetting.",
                description: "You can target specific weakpoints during combat."
            }
        ],
        prefixes: [
            {
                name: "Combat",
                description: "You are more proficiency at striking vital points on opponents."
            },
            {
                name: "Medical",
                description: "Your ability to treat wounds is increased."
            }
        ],
        modifiers: [
            {
                name: "Accurate",
                description: "You are always correct when evaluating vital signs."
            }
        ]
    };

})();