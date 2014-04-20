(function () {

  Topia.Skill.DivineRight = {
    description: "One of the benefits of being vastly influential is that your legimacy to a position of authority cannot be contradicted.",
    level: 6,
    rarity: 8,
    type: { knowledge: 5 },
    properties: [
      {
        text: "Enables zealous minions.",
        description: "You may invest influence into a minion to the point where they cannot be influenced by another entity."
      },

      {
        text: "Your property cannot be easily influenced.",
        description: "Property that you own takes twice as much foreign influence to take from you."
      }
    ],
    prefixes: [
      {
        name: "Mandated",
        description: "You receive a small discount to any influence expenditures."
      }
    ],
    modifiers: [
      {
        text: "Natural Influence",
        description: "You tend to influence those around you simply by being around them."
      }
    ]
  };
});