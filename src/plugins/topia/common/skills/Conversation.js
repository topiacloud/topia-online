(function () {

  Topia.Skill.Conversation = {
    description: "The art of conversation is the ability to talk to someone without boring them to sleep. Congratulations.",
    level: 1,
    rarity: 1,
    type: { knowledge: 1, speech: 1 },
    properties: [
      {
        text: "Enables expanded chat options, and messaging.",
        description: "You now have access to global chat, at the expense of influence, as well as the message action."
      }
    ],
    prefixes: [
      {
        name: "Efficient",
        description: "It costs you less influence to use global chat."
      },
      {
        name: "Fast Talk",
        description: "You have less of a delay between your global chat messages."
      }
    ],
    modifiers: [
      {
        name: "Eloquence",
        description: "It costs less influence to use global chat."
      }
    ]
  };
});