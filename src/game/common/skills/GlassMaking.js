(function () {

  Topia.Skill.GlassMaking = {
    description: "Given the proper resources, and extreme temperatures, you have learned how to make glass.",
    level: 3,
    rarity: 4,
    type: { crafting: 3, knowledge: 3 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You are now able to create glass from various resources. This requires extreme heat."
      }
    ],
    prefixes: [
      {
        name: "Primitive",
        description: "You can make low quality glass with a bonfire and simple tools."
      },

      {
        name: "Masterwork",
        description: "Your glass is of high quality."
      }
    ],
    modifiers: [
      {
        text: "Resourceful",
        description: "You require less resources to make glass."
      }
    ]
  };
});