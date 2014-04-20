(function () {

  Topia.Skill.Hourglasses = {
    description: "Being able to tell the passage of time is important for various reasons. You can now craft hourglasses to help facilitate this.",
    level: 1,
    rarity: 3,
    type: { knowledge: 2, time: 2 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "Allows the crafting of hourglasses."
      }
    ],
    prefixes: [
      {
        name: "Rushed",
        description: "It takes less time to craft hourglasses, at the cost of quality."
      },
      {
        name: "Superior",
        description: "Your hourglasses are of the finest quality."
      },
      {
        name: "Mystic",
        description: "Your hourglasses give a small boost to magic involving time."
      }
    ],
    modifiers: [
      {
        name: "Mastercraft",
        description: "You use less resources when crafting, and lose less when you fail."
      }
    ]
  };
});