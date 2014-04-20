(function () {

  Topia.Skill.Tactics = {
    description: "You understand the intimate details of utilizing positioning, terrain, and various strategies with weapons in order to achieve victory.",
    level: 4,
    rarity: 3,
    type: { combat: 3 },
    properties: [
      {
        text: "Enables advanced combat options.",
        description: "You may now utilize flips, grapples, and ripostes in combat."
      }
    ],
    prefixes: [
      {
        name: "Deceptive",
        description: "You will occasionally feign a certain tactic in favor of another."
      },
      {
        name: "Terrain",
        description: "You will perform various combat maneuvers depending on the terrain type you are fighting on."
      },
      {
        name: "Sorcerous",
        description: "When possible, you attempt to incorporate elemental effects into your combat tactics."
      }
    ],
    modifiers: [
      {
        name: "Blinding Speed",
        description: "All of your tactical maneuvers are executed more quickly."
      },

      {
        name: "Unstoppable Force",
        description: "You cannot be interrupted when executing a maneuver, although you may still be damaged."
      }
    ]
  };
});