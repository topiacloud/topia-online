(function () {

  Topia.Skill.HerbDocumentation = {
    description: "Properly identifying and categorizing herbs can be useful for a community.",
    level: 1,
    rarity: 1,
    type: { knowledge: 2, exploration: 2 },
    properties: [
      {
        text: "Herb identification.",
        description: "You are now able to harvest specific herbs by name."
      }
    ],
    prefixes: [
      {
        name: "Intuitive",
        description: "You may harvest specific herbs even if you have never encountered them before."
      }
    ],
    modifiers: [
      {
        text: "Herb Usage",
        description: "You gain additional information when using other skills (such as first aid) regarding herbs that may assist with that action."
      }
    ]
  };
});