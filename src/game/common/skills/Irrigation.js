(function () {

  Topia.Skill.Irrigation = {
    description: "Irrigation is simply the knowledge of how to move water from one area to another.",
    level: 3,
    rarity: 3,
    type: { knowledge: 3},
    properties: [
      {
        text: "Enables the ability to dig irrigation ditches.",
        description: "Irrigation ditches are an alternative to direct plumbing."
      }
    ],
    prefixes: [
      {
        name: "Dedicated",
        description: "Your irrigation ditches never lose quality over time."
      }
    ],
    modifiers: [
      {
        text: "Purifying Irrigation",
        description: "With proper magical skills, you may enchant your ditches to automatically remove inpurities from water flowing in them."
      }
    ]
  };
});