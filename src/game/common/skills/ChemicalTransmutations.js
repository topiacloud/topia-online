(function () {

  Topia.Skill.ChemicalTransmutations = {
    description: "You are finally able to transform one chemical into another.",
    level: 5,
    rarity: 5,
    type: { crafting: 5, knowledge: 7 },
    properties: [
      {
        text: "Enables the transmute action.",
        description: "By using copious amounts of resources, you are able to transform one known chemical into another known chemical."
      },

      {
        text: "Warning - dangerous.",
        discount: true,
        description: "Transmutation experiments frequently go haywire. You have been warned."
      }
    ],
    prefixes: [
      {
        name: "Chaotic",
        description: "You have both a high chance of successfully transmuting a chemical and a high chance of it being transmuted into something else."
      },
      {
        name: "Arcane",
        description: "You may use various magical reagents instead of mundane ones to perform transmutations."
      }
    ],
    modifiers: [
      {
        text: "Unexpected Results",
        description: "You have a small chance to produce more of a chemical than expected when you transmute something. "
      },

      {
        text: "Well Practiced",
        description: "The chance of a disasterous result is greatly reduced."
      }
    ]
  };
});