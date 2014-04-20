(function () {

  Topia.Skill.Stuffing = {
    description: "You can now stuff properly prepared corpses for preservation, either as trophies, or for other purposes.",
    level: 2,
    rarity: 2,
    type: { knowledge: 2, death: 2 },
    properties: [
      {
        text: "Enables stuffing of corpses.",
        description: "You can use wood chips or straw to stuff corpses for preservation."
      }
    ],
    prefixes: [
      {
        name: "Fetish",
        description: "Your preserved corpses are not just for show - they are used in certain magical rituals."
      },

      {
        text: "Perfect",
        description: "Your stuffed entities will never lose durability from the passage of time."
      }
    ],
    modifiers: [
      {
        text: "Corpse Trap",
        description: "You may stuff a corpse with almost anything - this can lead to interesting traps."
      }
    ]
  };
});