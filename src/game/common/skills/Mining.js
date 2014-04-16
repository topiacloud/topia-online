(function () {

  Topia.Skill.Mining = {
    description: "You understand the need to use a pick or shovel to uncover the earth's secrets.",
    level: 2,
    rarity: 2,
    type: { knowledge: 2, exploration: 2 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You may now craft pickaxes, hand drills, and sledgehammers."
      },

      {
        text: "Enables the mine action.",
        description: "This action will allow you to use certain tools related to mining to harvest a mineral resource node."
      }
    ],
    prefixes: [
      {
        name: "Combat",
        description: "You gain combat bonuses when wielding a pickaxe or sledgehammer."
      },

      {
        name: "Effortless",
        description: "Your mining attempts take less time and are less tiring."
      }
    ],
    modifiers: [
      {
        text: "Strike The Earth",
        description: "You uncover more resources when mining."
      }
    ]
  };
});