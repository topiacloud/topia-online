(function () {

  Topia.Skill.Chronometry = {
    description: "You can, quite simply, count in order to keep track of time. This allows you to perform actions after a certain time has passed.",
    level: 1,
    rarity: 3,
    type: { knowledge: 2, time: 2 },
    properties: [
      {
        text: "Advanced scripting options.",
        description: "You can utilize time counters in a script."
      }
    ],
    prefixes: [
      {
        name: "Miscalculated",
        description: "You may use an unlimited number of time counters, but they have a greater chance of being off count."
      },
      {
        name: "Primitive",
        description: "You require resources to use scripts with time counters."
      },
      {
        name: "Mystic",
        description: "You gain a small boost to your time magic."
      }
    ],
    modifiers: [
      {
        name: "Precise Count",
        description: "The chance for a counter to misfire is greatly reduced."
      }
    ]
  };
});