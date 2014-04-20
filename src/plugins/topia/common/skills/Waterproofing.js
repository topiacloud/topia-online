(function () {

  Topia.Skill.Waterproofing = {
    description: "Normal wear and tear is bad enough, but materials can be ruined by a good rain. You've learned how to prevent this through an application of resources.",
    level: 2,
    rarity: 2,
    type: { crafting: 2, knowledge: 2 },
    properties: [
      {
        text: "Enables the proof action.",
        description: "You are able to use this action to proof objects against a certain effect."
      }
    ],
    prefixes: [
      {
        name: "Effective",
        description: "Your proofing is super effective."
      },

      {
        name: "Primitive",
        description: "You can use primitive resources, such as mud, to provide lower quality proofing."
      }
    ],
    modifiers: [
      {
        text: "Arcane Proofing",
        description: "With the proper magical abilities and resources, you can proof materials against various forms of magic."
      }
    ]
  };
});