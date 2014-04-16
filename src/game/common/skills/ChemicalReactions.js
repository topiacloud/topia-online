(function () {

  Topia.Skill.ChemicalReactions = {
    description: "Much like people, certain chemicals react in interesting ways when mixed. Use caution.",
    level: 2,
    rarity: 3,
    type: { crafting: 2, knowledge: 3 },
    properties: [
      {
        text: "Reaction identification.",
        description: "You can now view a list of all reactions of a resource that you have experienced in your lifetime."
      },

      {
        text: "Extremely dangerous.",
        discount: true,
        description: "Mixing chemicals, especially to explore new reactions, is excessively dangerous. You have been warned."
      }
    ],
    prefixes: [
      {
        name: "Theoretical",
        description: "When discovering a new reaction, you have a small chance to discover another reaction."
      },
      {
        name: "Fuming",
        description: "Your chemical reactions tend to fume more than others, resulting in rapidly spreading vapors."
      }
    ],
    modifiers: [
      {
        text: "Expert Alchemist",
        description: "Your chemical reactions produce byproducts of the highest quality."
      }
    ]
  };
});