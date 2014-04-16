(function () {

  Topia.Skill.Fixtures = {
    description: "Nailing something to something else can be extremely useful. You understand this.",
    level: 1,
    rarity: 3,
    type: { crafting: 2 },
    properties: [
      {
        text: "Enables nailing and hanging.",
        description: "Using a hammer and nails, or various tying equipment, you can attach one object to another."
      }
    ],
    prefixes: [
      {
        name: "Primitive",
        description: "You may use simple vines or rocks to affix things together at the cost of durability of the fixture."
      },

      {
        name: "Durable",
        description: "Your fixtures tend to not degrade as quickly."
      }
    ],
    modifiers: [
      {
        text: "Mechanical Fixtures",
        description: "You may link fixtures to a mechanism trigger in order to release those objects."
      }
    ]
  };
});