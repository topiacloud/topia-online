(function () {

  Topia.Skill.WeaponCrafting = {
    description: "You are able to craft weapons of varying designs out of varying materials.",
    level: 5,
    rarity: 4,
    type: { crafting: 5, knowledge: 3 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You are able to craft spears, axes, swords, hammers, maces, and other weapons."
      }
    ],
    prefixes: [
      {
        name: "Primitive",
        description: "Weapons you create often use less resources, but are of lower quality."
      },

      {
        name: "Vicious",
        description: "Your weapons are often create with especially brutal damage potential, but tend to break more quickly."
      },

      {
        name: "Exotic",
        description: "You are able to craft flails, nunchaku, and chakram."
      }
    ],
    modifiers: [
      {
        text: "Mass Production",
        description: "The time it takes to craft a weapon is reduced."
      },

      {
        text: "Magical Synergy",
        description: "You may utilize magical abilities and resources when crafting a weapon to bestow it with special properties."
      }
    ]
  };
});