(function () {

  Topia.Skill.Signs = {
    description: "You can now fashion and affix signs to an area.",
    level: 1,
    rarity: 3,
    type: { crafting: 2 },
    properties: [
      {
        text: "Enables crafting options.",
        description: "You may now craft wooden signs."
      }
    ],
    prefixes: [
      {
        name: "Durable",
        description: "Your signs tend to not degrade as quickly."
      },

      {
        name: "Elder",
        description: "Your signs are not just for displaying something - they convey effects."
      }
    ],
    modifiers: [
      {
        text: "Hidden In Plain Sight",
        description: "You may designate a message on your signs that can read differently to certain people."
      }
    ]
  };
});