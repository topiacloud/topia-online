(function () {

  Topia.Skill.AlchemyTheory = {
    description: "The idea of mixing various resources to create new ones, or to alter the existing properties of a resource is extremely interesting to you.",
    level: 1,
    rarity: 3,
    type: { crafting: 2, knowledge: 3 },
    properties: [
      {
        text: "Alchemical identification.",
        description: "You are able to identify chemicals by examining them."
      },

      {
        text: "Enables the mix action.",
        description: "You can use the mix action to combine two chemicals."
      },

      {
        text: "Extremely dangerous.",
        discount: true,
        description: "Mixing chemicals can be extremely hazardous to the eyes, nose, and mouth."
      }
    ],
    prefixes: [
      {
        name: "Brilliant",
        description: "You automatically identify any chemical you posses."
      },
      {
        name: "Experimental",
        description: "You sometimes gain extra effects when mixing chemicals - this also increases the risk of catastrophic failure."
      }
    ],
    modifiers: [
      {
        text: "Safety First",
        descrption: "The chance of a catastrophic failure when mixing is greatly decreased."
      }
    ]
  };
});