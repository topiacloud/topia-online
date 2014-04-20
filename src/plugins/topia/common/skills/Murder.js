(function () {

  Topia.Skill.Murder = {
    description: "Sometimes violence is the only solution. You understand this, and are versed in how to mete out pain.",
    level: 2,
    rarity: 2,
    type: { combat: 2 },
    properties: [
      {
        text: "Allows you to use deathblows on another person.",
        description: "You may now use whatever tools you have at your disposal to end the life of another human being."
      },

      {
        text: "Disables pacifism.",
        discount: true,
        description: "Practicing the art of death on a living being is the opposite of non-violence."
      }
    ],
    prefixes: [
      {
        name: "Horrific",
        description: "Your deathblows are exceptionally brutal, splattering bits of foes everywhere."
      },
      {
        name: "Careful",
        description: "Your deathblows leave virtually no trace evidence behind."
      },
      {
        name: "Torturous",
        description: "Your deathblows aren't instant. You take time to finish your opponent."
      }
    ],
    modifiers: [
      {
        name: "Expertise",
        description: "Your deathblows take less time to execute."
      },

      {
        name: "Ritualistic",
        description: "Your connection to the gods is slightly increase when you perform a death blow."
      }
    ]
  };
});