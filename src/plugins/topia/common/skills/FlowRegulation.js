(function () {

  Topia.Skill.FlowRegulation = {
    description: "Controlling liquid flow through piping can prevent disaster. You've learned this and can now modify plumbing in such a way as to facilitate this.",
    level: 2,
    rarity: 2,
    type: { knowledge: 2, crafting: 3 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "Allows the creation of pressure valves, cut off wheels, and other objects related to plumbing."
      }
    ],
    prefixes: [
      {
        name: "Reliable",
        description: "Your flow manipulation objects will almost never malfunction."
      }
    ],
    modifiers: [
      {
        text: "Mechanical Synergy",
        description: "When using flow regulation objects in conjunction with triggers, they perform their tasks twice as effectively."
      }
    ]
  };
});