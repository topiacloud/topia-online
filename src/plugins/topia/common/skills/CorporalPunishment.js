(function () {

  Topia.Skill.CorporalPunishment = {
    description: "Every so often, fear of banishment or imprisonment simply isn't enough to discourage unsavory elements from misbehaving.",
    level: 8,
    rarity: 8,
    type: { knowledge: 7 },
    properties: [
      {
        text: "Allows for extended punishment options.",
        description: "You may now utilize certain tools and actions to inflict damage on others."
      }
    ],
    prefixes: [
      {
        name: "Crippling",
        description: "Your punishments leave lasting effects on the victim."
      },

      {
        name: "Magical",
        description: "You can inflict various forms of torture utilizing elemental magic."
      }
    ],
    modifiers: [
      {
        text: "Marked Man",
        description: "Rather than inflicting a direct punishment, you can utilize a magical mark on a person to inflict a punishment should they take a certain action."
      }
    ]
  };
});