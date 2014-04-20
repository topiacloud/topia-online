(function () {

  Topia.Skill.Hunting = {
    description: "You are able to obliterate smaller forms of animal life for food and raw materials.",
    level: 1,
    rarity: 1,
    type: { combat: 1, stealth: 1, exploration: 1 },
    properties: [
      {
        text: "Enables the hunt action.",
        description: "The hunt action will seek out and attempt to slay the nearest animal of a type you specify."
      }
    ],
    prefixes: [
      {
        name: "Stealthy",
        description: "You will utilize stealth abilities while hunting prey."
      },
      {
        name: "Chase",
        description: "Your hunting style involves running an animal down rather than using ranged weapons."
      }
    ],
    modifiers: [
      {
        name: "Apex Predation",
        description: "You may hunt any creature."
      },

      {
        name: "Swift Tracking",
        description: "You move more quickly while hunting."
      }
    ]
  };
});