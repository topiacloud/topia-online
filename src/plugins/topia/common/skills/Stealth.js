(function () {

  Topia.Skill.Stealth = {
    description: "You understand that it's not always a positive thing to be well known. This is also true for organizations.",
    level: 5,
    rarity: 3,
    type: { subterfuge: 4 },
    properties: [
      {
        text: "Enables the hide action.",
        description: "The hide action allows you to use the surrounding terrain to remain unseen, providing you are still."
      },

      {
        text: "Enables the sneak action.",
        description: "The sneak action allows you to move silently across the landscape. Sneaking allows you to remain hidden while moving."
      },

      {
        text: "Promotes suspicion.",
        discount: true,
        description: "Sneaking around like a skulking animal is probably not the best way to win the trust of your neighbors."
      }
    ],
    prefixes: [
      {
        name: "Combat",
        description: "Your combat maneuvers are occasionally obfuscated, denying your enemy the chance to counter them."
      },

      {
        name: "Wilderness",
        description: "You gain bonuses to your hide and sneak actions when you are in the wilderness."
      },

      {
        name: "Trained",
        description: "You hide and sneak much more quickly."
      }
    ],
    modifiers: [
      {
        text: "Shadow Master",
        description: "You have a limited amount of passive stealth - entities will have trouble identifying you or your properties."
      }
    ]
  };
});