(function () {

  Topia.Skill.BookBinding = {
    description: "Carving words into stone is nice, but extensive volumes of information are more easily contained in a simple medium - books.",
    level: 5,
    rarity: 4,
    type: { crafting: 3, knowledge: 5 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You may now craft books, as well as tools to produce books."
      }
    ],
    prefixes: [
      {
        name: "Primitive",
        description: "You may use leathers and other primitive materials to create books at the cost of durability."
      }
    ],
    modifiers: [
      {
        text: "Unlimited Volume",
        description: "You may use magical resources to create books that have an infinite amount of pages."
      }
    ]
  };
});