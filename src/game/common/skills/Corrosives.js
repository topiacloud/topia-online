(function () {

  Topia.Skill.Corrosives = {
    description: "There are certain compounds that simply don't care. They destroy things they touch.",
    level: 3,
    rarity: 4,
    type: { crafting: 4, knowledge: 5 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You may now craft corrosion-proof containers, as well as corrosive liquids."
      },

      {
        text: "Extremely hazardous.",
        discount: true,
        description: "Use your imagination."
      }
    ],
    prefixes: [
      {
        name: "Delayed",
        description: "Your corrosives do not begin to damage objects until a period of time has passed after being applied."
      },
      {
        name: "Selective",
        description: "You may choose what type of material your corrosives affect."
      }
    ],
    modifiers: [
      {
        text: "Extreme Reaction",
        description: "Your corrosives cause damage much more quickly to objects."
      }
    ]
  };
});