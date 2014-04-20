(function () {

  Topia.Skill.Mummification = {
    description: "With the proper toolset, it's possible to quickly and efficiently remove the organs of a corpse, and preserve them.",
    level: 2,
    rarity: 3,
    type: { knowledge: 2, death: 3 },
    properties: [
      {
        text: "Allows mummifying corpses.",
        description: "You may now use the mummify action."
      },

      {
        text: "Enables the crafting of advanced medical tools.",
        description: "You may now craft mummification tools, and use them to mummify a corpse."
      }
    ],
    prefixes: [
      {
        name: "Fetish",
        description: "Your mummified objects grant slight bonuses to magical arts."
      },

      {
        text: "Enchanted",
        description: "Utilizing magical skills, you may enchant mummified objects with elemental properties."
      }
    ],
    modifiers: [
      {
        text: "Necromantic Vessel",
        description: "You may use magical resources to mummify and enchant a corpse to prepare it to house a soul."
      }
    ]
  };
});