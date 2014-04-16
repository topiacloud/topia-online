(function () {

  Topia.Skill.Timbercraft = {
    description: "Timbercraft is the ability to create simple wooden objects.",
    level: 1,
    rarity: 1,
    type: { crafting: 1 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You are able to create wooden spikes, torches, poles, and other simple crafts."
      }
    ],
    prefixes: [
      {
        name: "Practiced",
        description: "All objects you create with timbercraft have higher durability and quality."
      },

      {
        name: "Harmful",
        description: "Your timbercraft objects are designed to do more damage to things when used as weapons."
      }
    ],
    modifiers: [
      {
        text: "Intelligent Design",
        description: "You occasionally gain back resources consumed when crafting."
      }
    ]
  };
});