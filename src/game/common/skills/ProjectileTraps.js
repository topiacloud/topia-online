(function () {

  Topia.Skill.ProjectileTraps = {
    description: "Deadfalls and nets are not enough to passively trap an area. Crossbow bolts firing out of walls, however...",
    level: 6,
    rarity: 6,
    type: { crafting: 6, exploration: 4 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You may now assemble ranged weaponry and ammunition of various kinds within a trap."
      }
    ],
    prefixes: [
      {
        name: "Toxic",
        description: "With the proper skills and materials, you can apply chemical effects to your projectile traps."
      },

      {
        name: "Penetrating",
        description: "Your projectile traps are more forceful than others."
      }
    ],
    modifiers: [
      {
        text: "Mystic Shot",
        description: "You may craft projectile traps that use no ammunition, but instead fire various elemental types of projectiles."
      },

      {
        text: "Weapon Adaptation",
        description: "You can use almost any ranged weapon in your traps."
      }
    ]
  };
});