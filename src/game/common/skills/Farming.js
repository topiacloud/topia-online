(function () {

  Topia.Skill.Farming = {
    description: "Farming is the skill of working the earth to grow food and other things.",
    level: 2,
    rarity: 2,
    type: { knowledge: 2 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You are able to craft ploughs, hoes, sickles, and other farming implements."
      },

      {
        text: "Enables farming.",
        description: "You now have access to various actions related to farming. Examples include plough, plant, and harvest."
      }
    ],
    prefixes: [
      {
        name: "Subsistence",
        description: "Your grain crops yield more results."
      },

      {
        name: "Vigorous",
        description: "The time is takes to perform all of your farming actions is greatly reduced."
      }
    ],
    modifiers: [
      {
        text: "Earth's Bounty",
        description: "All of your crops yield is increased."
      },

      {
        text: "Bane Plants",
        description: "You are able to successfully grow certain types of dangerous plant life."
      }
    ]
  };
});