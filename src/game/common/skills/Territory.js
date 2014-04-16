(function () {
    
    Topia.Skill.Territory = {
        description: "Allows you to claim plots of land as your own territory, using influence.",
        level: 3,
        rarity: 1,
        properties: [
            {
                text: "Fashion stone cairn.",
                description: "You can create stone cairns, which allows you to claim territory as your own."
            }
        ],
        prefixes: [
            {
                name: "Influential",
                description: "Your territory is more difficult for others to claim."
            }
        ],
        modifiers: [
            {
                name: "Bargainer",
                description: "Your territory costs less influence to maintain."
            },
            {
                name: "Predatory",
                description: "Reduced influence cost when claiming someone else's territory."
            },
            {
                name: "Regional",
                description: "You can define sub-regions within your territory."
            }
        ]
    };
})();