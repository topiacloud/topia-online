(function () {

  Topia.Skill.Charity = {
    description: "Whereas gifts are used to win over the affections of another, charity is giving without expectation of repayment.",
    level: 8,
    rarity: 6,
    type: { knowledge: 5, crafting: 5 },
    properties: [
      {
        text: "Enables crafting options.",
        description: "You are able to craft locked donation bins."
      }
    ],
    prefixes: [
      {
        name: "Generous",
        description: "Your donation bins can be created to automatically bestow influence on a target or organization."
      }
    ],
    modifiers: [
      {
        text: "Benevolent Benefit",
        description: "You gain a small percentage of all influence donations to your donation bins."
      }
    ]
  };
});