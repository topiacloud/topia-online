(function () {

  Topia.Skill.Glassworking = {
    description: "Glassblowing is an extremely useful skill. You are capable of crafting various containers and other objects from glass.",
    level: 2,
    rarity: 4,
    type: { crafting: 2, knowledge: 2 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You are able to create goblets, windows, jewelry, and other glass items."
      }
    ],
    prefixes: [
      {
        name: "Economic",
        description: "Your objects require less raw materials to craft, but are of lower quality."
      },

      {
        name: "Versatile",
        description: "You may use any combination of glass type while crafting without a penalty to quality."
      }
    ],
    modifiers: [
      {
        text: "Shatterproof",
        description: "Your glass goods are incredibly durable."
      }
    ]
  };
});