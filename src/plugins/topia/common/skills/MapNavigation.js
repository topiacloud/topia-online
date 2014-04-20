(function () {

  Topia.Skill.MapNavigation = {
    description: "Exploring the wilderness can be dangerous. The ability to use a map properly can prevent getting lost, and subsequently dead.",
    level: 4,
    rarity: 4,
    type: { exploration: 4, knowledge: 2 },
    properties: [
      {
        text: "Enables advanced map use.",
        description: "Allows you to use a map, and have your current location marked (if your location is on the map)."
      }
    ],
    prefixes: [
      {
        name: "Estimated",
        description: "Even if you fail at an attempt to use your map properly, you can still get an approximate location."
      }
    ],
    modifiers: [
      {
        text: "Pathfinder",
        description: "You can use the Path action to draw a path on your map to your destination."
      }
    ]
  };
});