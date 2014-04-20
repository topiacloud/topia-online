(function () {

  Topia.Skill.Shelters = {
    description: "The wilderness is extremely dangerous. You are able to construct primitive shelters to protect yourself from the elements, among other things.",
    level: 1,
    rarity: 1,
    type: { crafting: 1, exploration: 1 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You may now craft shelters and field tents."
      },

      {
        text: "Enables the deploy action.",
        description: "The deploy action can be used on a field tent or shelter to place it in the world."
      }
    ],
    prefixes: [
      {
        name: "Compact",
        description: "Your shelter equipment is much less cumbersome."
      },

      {
        name: "Resiliant",
        description: "Your shelters resist natural elements much more effectively."
      }
    ],
    modifiers: [
      {
        text: "Well Built",
        description: "Deployed shelters are much more durable than normal."
      }
    ]
  };
});