(function() {

    Topia.Skill.Questing = {
        description: "Sometimes the best way to get something done is to have someone else do it for you. This philosophy can be profitable.",
        level: 3,
        rarity: 5,
        type: { social: 5, exploration: 3 },
        properties: [
            {
                text: "Enables influence rewards.",
                description: "You can attach influence rewards to verbal pacts.  You can create up to 3 active quests at once."
            }
        ],
        prefixes: [
        ],
        modifiers: [
            {
                name: "Quest Master",
                description: "Increases the maximum number of quests you can create to 10."
            }
        ]
    };
})();