(function () {

  Topia.Skill.Mysticism = {
    description: "You have the general idea that something greater is out there. By paying homage to the gods, you may be able to avoid their wrath.",
    level: 1,
    rarity: 1,
    type: { religion: 1, crafting: 1 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You may now craft certain objects appropriate for mystic rituals. Incense holders, effigies, and pyres are among your crafting options."
      },

      {
        text: "Enables the pray action.",
        description: "You are able to use the pray action to communicate with higher powers."
      },

      {
        text: "Potentially dangerous.",
        discount: true,
        description: "Interacting with unseen and omnipotent forces can have unforeseen consequences."
      }
    ],
    prefixes: [
      {
        name: "Empowering",
        description: "Your abilities which have divine connections are empowered though prayer."
      },
      {
        name: "Profane",
        description: "Your religious object tend to corrupt the areas around them."
      }
    ],
    modifiers: [
      {
        text: "Shamanism",
        descrption: "Being in various terrain types empowers your prayers."
      },

      {
        text: "Crusader",
        description: "You may declare an entity a blasphemous foe - you gain bonuses when combating them."
      }
    ]
  };
});