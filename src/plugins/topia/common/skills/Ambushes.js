(function () {

  Topia.Skill.Ambushes = {
    description: "You know how to spring an ambush on an opponent, combining stealth with a nasty surprise attack.",
    level: 6,
    rarity: 5,
    type: { subterfuge: 6, combat: 4 },
    properties: [
      {
        text: "Enables the ambush action.",
        description: "You may attempt to ambush someone provided that you are in hiding and you attack them."
      },

      {
        text: "Ambush spotting.",
        description: "You are able to spot hidden individuals more easily."
      }
    ],
    prefixes: [
      {
        name: "Brutal",
        description: "Your ambushes tend to cause horrific injuries if they are successful."
      },

      {
        name: "Silent",
        description: "You perform ambushes with little attention drawn to yourself - this is heightened when using ranged weapons."
      }
    ],
    modifiers: [
      {
        text: "Terrain Adaptation",
        description: "You will attempt to utilize your terrain when initiating an ambush."
      }
    ]
  };
});