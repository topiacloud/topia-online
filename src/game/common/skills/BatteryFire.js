(function () {

  Topia.Skill.BatteryFire = {
    description: "Just as volley fire applies to smaller ranged weapons, you can order multiple cannon to fire at the same time.",
    level: 10,
    rarity: 9,
    type: { combat: 7, leadership: 7 },
    properties: [
      {
        text: "Enables the battery action.",
        description: "You may order a number of minions to fire their seige weapons simultaneously."
      }
    ],
    prefixes: [
      {
        name: "Trained",
        description: "All minions firing in a battery do so with increased accuracy."
      },
      {
        name: "Excessive",
        description: "An unlimited number of minions may use the battery action simultaneously."
      }
    ],
    modifiers: [
    ]
  };
});