(function () {

  Topia.Skill.QualityMetals = {
    description: "You are now able to smelt and utilize more advanced metals than iron.",
    level: 4,
    rarity: 4,
    type: { knowledge: 3, crafting: 4 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You are now able to craft any object out of advance metals such as steel."
      },

      {
        text: "Steel crafting.",
        description: "You may now smelt steel utilizing a furnace, iron, and flux stone."
      }
    ],
    prefixes: [
      {
        name: "Alternate",
        description: "You are able to smelt and use other metals not commonly found in the world."
      },

      {
        name: "Primitive",
        description: "You may smelt quality metals with inferior common resources at the cost of quality."
      }
    ],
    modifiers: [
      {
        text: "Stoked Furnace",
        description: "You sometimes can reuse flux when smelting metals that require it."
      }
    ]
  };
});