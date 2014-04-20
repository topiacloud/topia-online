(function () {

  Topia.Skill.Espionage = {
    description: "Espionage is the art of poking your nose where it doesn't belong. Use with caution.",
    level: 7,
    rarity: 6,
    type: { subterfuge: 7, exploration: 5 },
    properties: [
      {
        text: "Enables the spy action.",
        description: "Spying is an action which allows a person to take a snapshot of entities and structures in an area. This snapshot can be viewed in a report."
      }
    ],
    prefixes: [
      {
        name: "Trained",
        description: "The spy action will garner much more results than normal."
      }
    ],
    modifiers: [
      {
        text: "Attention To Detail",
        description: "Your snapshot data may contain hidden information such as information on objects within houses."
      }
    ]
  };
});