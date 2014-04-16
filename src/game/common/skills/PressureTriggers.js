(function () {

  Topia.Skill.PressureTriggers = {
    description: "Pressure triggers allow you to link mechanisms to fire only when a certain amount of weight as been applied to a pressure sensor.",
    level: 7,
    rarity: 7,
    type: { knowledge: 6, crafting: 7 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You may now craft pressure plates."
      },

      {
        text: "Expanded scripting options.",
        description: "You may now define a minimum and maximum weight for a pressure plate when scriping a triggered reaction."
      }
    ],
    prefixes: [
      {
        name: "Smart",
        description: "At the cost of extra resources, you can create triggers which ignore weight over a certain amount."
      },

      {
        name: "Primitive",
        description: "Your timed triggers can be made out of simple natural materials, at the cost of quality."
      }
    ],
    modifiers: [
      {
        text: "Resetting Triggers",
        description: "By using advanced mechanisms, you can create pressure triggers that reset themselves after each use."
      }
    ]
  };
});