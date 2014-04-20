(function () {

  Topia.Skill.ChemicalCombustion = {
    description: "Certain chemicals react extremely violently when exposed to flame. You understand these properties and can take advantage of them.",
    level: 4,
    rarity: 4,
    type: { crafting: 4, knowledge: 5 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You are now able to craft flammable liquids and powders."
      },

      {
        text: "Excessively dangerous.",
        discount: true,
        description: "Too much of a compound is extremely dangerous. Have fun."
      }
    ],
    prefixes: [
      {
        name: "Innovative",
        description: "You may apply combustion effects to normally non-combustable chemicals. "
      },

      {
        name: "Destructive",
        description: "Your combustables are both highly unstable and highly explosive."
      }
    ],
    modifiers: [
      {
        text: "Chemical Holocaust",
        description: "Your combustables explosive properties are greatly enhanced."
      }
    ]
  };
});