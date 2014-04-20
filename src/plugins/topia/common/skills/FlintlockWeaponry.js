(function () {

  Topia.Skill.FlintlockWeaponry = {
    description: "You understand how to craft and use the most cutting edge weaponry in the land.",
    level: 8,
    rarity: 8,
    type: { knowledge: 8, crafting: 8 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You may craft flintlock pistols and muskets, as well as the ammunition for both."
      }
    ],
    prefixes: [
      {
        name: "Primitive",
        description: "Your weapons are of lower quality, but take less resources to create."
      },

      {
        name: "Innovative",
        description: "Your flintlock weapons can fire multiple shots at once, but tend to fail in catastrophic ways."
      }
    ],
    modifiers: [
      {
        text: "Magic Bullet",
        description: "You may create ammunition with elemental properties by using magical resources."
      },

      {
        text: "Precise Engineering",
        description: "Your weapons tend to almost never malfunction, but are difficult to repair."
      }
    ]
  };
});