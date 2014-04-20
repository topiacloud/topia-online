(function () {

  Topia.Skill.Smelting = {
    description: "You understand the need to use a pick or shovel to uncover the earth's secrets.",
    level: 3,
    rarity: 3,
    type: { knowledge: 3, crafting: 3 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "Allows the crafting of forges."
      },

      {
        text: "Enables the smelt action.",
        description: "The smelt action allows you to burn away the impurities in ore to create a metal ingot. This requires a furnace."
      }
    ],
    prefixes: [
      {
        name: "Perfect",
        description: "You ingots are of much higher quality than most, but your chance of failure is higher."
      },

      {
        name: "Mystic",
        description: "You may enchant your crafted forges with elemental properties."
      }
    ],
    modifiers: [
      {
        text: "Soulforge",
        description: "You may create a special forge that can only be used by you - this forge produces items of high quality."
      }
    ]
  };
});