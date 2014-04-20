(function () {

  Topia.Skill.Sundials = {
    description: "At some point, you've realized that the position of the sun is paramount to timekeeping.",
    level: 2,
    rarity: 3,
    type: { crafting: 2, knowledge: 3 },
    properties: [
      {
        text: "Enables crafting options.",
        description: "You can craft stone or wooden sundials, and read them to get the current time of day."
      }
    ],
    prefixes: [
      {
        name: "Primitive",
        description: "Your sundials may be made out of any material."
      },

      {
        name: "Mystic",
        description: "Your sundials are never inaccurate, regardless of the quality."
      }
    ],
    modifiers: [
      {
        text: "Ritual Timekeeping",
        description: "Your sundials empower all time magic used within a certain radius around them."
      }
    ]
  };
});