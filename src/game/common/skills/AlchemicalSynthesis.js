(function () {

  Topia.Skill.AlchemicalSynthesis = {
    description: "Sometimes, substitutes can be made for actual materials. Synthesizing these materials can be easier than finding them naturally.",
    level: 3,
    rarity: 5,
    type: { crafting: 3, knowledge: 4 },
    properties: [
      {
        text: "Enables the synthesize action.",
        description: "You are now able to artificially create chemicals of a lesser quality with the appropriate materials."
      }
    ],
    prefixes: [
      {
        name: "Total",
        description: "You may also synthesize inferior quality rare materials."
      }
    ],
    modifiers: [
      {
        text: "Practiced Process",
        description: "Your chance of failure and catastrophic failure is reduced."
      }
    ]
  };
});