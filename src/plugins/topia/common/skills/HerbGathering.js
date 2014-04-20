(function () {

  Topia.Skill.HerbGathering = {
    description: "You are able to harvest naturally occuring herbs found in the wilderness.",
    level: 1,
    rarity: 1,
    type: { knowledge: 2, exploration: 2 },
    properties: [
      {
        text: "Enables the harvest action.",
        description: "The harvest action allows you to find and gather herbs."
      }
    ],
    prefixes: [
      {
        name: "Careful",
        description: "You can gather dangerous herbs with a greatly reduced risk."
      }
    ],
    modifiers: [
      {
        text: "Commune With Nature",
        description: "You may check the properties of an herb before harvesting it."
      }
    ]
  };
});