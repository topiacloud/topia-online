(function () {

  Topia.Skill.ChemicalConcentrates = {
    description: "While extracts are generally made from herbs, chemicals can also be processed to increase potency.",
    level: 3,
    rarity: 3,
    type: { crafting: 3, knowledge: 4 },
    properties: [
      {
        text: "Enables the distill action.",
        description: "Using certain tools with a chemical, you are able to use the distill action. This reduces the quantity of a chemical, while increasing the potency."
      },

      {
        text: "Extremely dangerous.",
        discount: true,
        description: "Chemicals can be hazardous. Extremely concentrated chemicals can be disasterous."
      }
    ],
    prefixes: [
      {
        name: "Imbued",
        description: "Your distilling objects can be enchanted to bestow elemental properties on distilled chemicals."
      },
      {
        name: "Resourceful",
        description: "Your distillation process has a chance to leave behind byproducts of the process."
      }
    ],
    modifiers: [
      {
        text: "Triple Distilled",
        description: "Your chemicals are processed extremely efficiently, heightening their quality. "
      }
    ]
  };
});