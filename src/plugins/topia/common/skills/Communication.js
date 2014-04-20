(function () {

  Topia.Skill.Communication = {
    description: "You've learned how to convey things to another person without pain/pleasure triggers. You're becoming civilized.",
    level: 4,
    rarity: 2,
    type: { knowledge: 2, speech: 2 },
    properties: [
      {
        text: "Enables emotes.",
        description: "You can use the do action to perform a string of text, or utilize various emotes."
      }
    ],
    prefixes: [
      {
        name: "Creative",
        description: "Expands the range of emotes you have access to."
      }
    ],
    modifiers: [
      {
        name: "Mimicry",
        description: "You can adjust the animation speed of your emote."
      }
    ]
  };
});