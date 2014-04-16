(function () {

  Topia.Skill.Temples = {
    description: "You understand the need to pay homage to the gods in a less irreverent fashion. You now understand the inner workings of temples.",
    level: 2,
    rarity: 5,
    type: { religion: 4, crafting: 2 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You have the ability to craft various objects to be used in a temple."
      },

      {
        text: "Enables the consecrate action.",
        description: "You may now use the consecrate action. This allows you to use influence to purchase a special plot of land which is considered hallowed by a god of your choice."
      },

      {
        text: "Can have unfortunate consequences.",
        discount: true,
        description: "Gods are fickle beings, and paying tribute to one can bring down the wrath of the others. You have been warned."
      }
    ],
    prefixes: [
      {
        name: "Inspiring",
        description: "The areas you consecrate have positive effects on those who align themselves with your higher power."
      },
      {
        name: "Purifying",
        description: "Your hallowed areas cleanse corruption and other global effects near them."
      }
    ],
    modifiers: [
      {
        text: "Public Worship",
        descrption: "You may choose an effect that applies to anyone visiting your consecrated area."
      },

      {
        text: "Impossible Geometry",
        description: "Temples constructed in your hallowed area tend to attract wholly unnatural creatures."
      }
    ]
  };
});