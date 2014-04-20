(function () {

  Topia.Skill.Forging = {
    description: "Metalcrafting is probably the most important skill in the world. Knowing how to shape metal into tools and components in something you've learned.",
    level: 4,
    rarity: 4,
    type: { knowledge: 3, crafting: 4 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "Allows the crafting of numerous items, including nails, metal tool peices, and blades."
      }
    ],
    prefixes: [
      {
        name: "Supernatural",
        description: "By using magical and rare resources, you can forge objects with otherworldly properties."
      },

      {
        name: "Reliable",
        description: "Your forged objects have higher durability than most."
      }
    ],
    modifiers: [
      {
        text: "Forgecraft",
        description: "You gain small bonuses to fire resistance, as well as bonuses to all forged item quality."
      }
    ]
  };
});