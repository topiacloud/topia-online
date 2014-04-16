(function () {

  Topia.Skill.HerbBlending = {
    description: "By mixing various herbs together, you can create interesting effects.",
    level: 1,
    rarity: 1,
    type: { crafting: 1, knowledge: 2 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You may now craft mortars used for herb blending."
      },

      {
        text: "Enables the blend action.",
        description: "The blend action allows you to use certain tools to mix two or more herbs."
      }
    ],
    prefixes: [
      {
        name: "Arcane",
        description: "You may enchant mortars with elemental properties, bestowing effects on mixtures you create."
      },
      {
        name: "Experimental",
        description: "You sometimes gain extra effects when mixing herbs but you also have a chance to produce nothing."
      }
    ],
    modifiers: [
      {
        text: "Mystic Connection",
        description: "Your connection with the plants of the land empowers your earth magic slightly."
      },

      {
        text: "Surplus",
        description: "You have a chance to recover combined herbs."
      }
    ]
  };
});