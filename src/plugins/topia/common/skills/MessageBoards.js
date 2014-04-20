(function () {

  Topia.Skill.MessageBoards = {
    description: "A message board is simply a large peice of wood with a lot of messages posted on it from various people. As if you didn't know.",
    level: 4,
    rarity: 4,
    type: { crafting: 5 },
    properties: [
      {
        text: "Enables crafting options.",
        description: "You may now craft and post message boards."
      }
    ],
    prefixes: [
      {
        name: "Recorded",
        description: "Your message boards will automatically display the identity of those using it, regardless of whom they claim to be."
      },

      {
        name: "Anonymous",
        description: "Messages on your boards will not display any sort of identity information."
      }
    ],
    modifiers: [
      {
        text: "Exclusive Access",
        description: "Your message boards may be set to only accept messages from those you choose."
      }
    ]
  };
});