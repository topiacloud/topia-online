(function () {

  Topia.Skill.AutomaticIrrigation = {
    description: "As civilization becomes more complex, even simple farming moves with the times. You are privy to a technique to automatically provide water to crops.",
    level: 3,
    rarity: 3,
    type: { knowledge: 3, crafting: 3 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You can craft a plumbing system which provides water to an area at given intervals."
      }
    ],
    prefixes: [
      {
        name: "Nutritious",
        description: "Your irrigation system tends to contribute to a larger crop yield."
      }
    ],
    modifiers: [
      {
        text: "Improvised Flow",
        description: "You can use your irrigation systems to move any liquid at timed intervals."
      }
    ]
  };
});