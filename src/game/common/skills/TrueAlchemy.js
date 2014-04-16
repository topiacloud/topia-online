(function () {

  Topia.Skill.TrueAlchemy = {
    description: "You are practically a wizard - you are now able to transmute one resource into another.",
    level: 6,
    rarity: 7,
    type: { crafting: 6, knowledge: 8, magic: 5 },
    properties: [
      {
        text: "Expands the transmute action.",
        description: "You may now transmute any resource into any resource, at extreme ratios."
      }
    ],
    prefixes: [
      {
        name: "Masterful",
        description: "Your alchemy skills are world renown - it takes fewer resources to transmute."
      },
      {
        name: "Frugal",
        description: "You have a small chance of gaining back resources expended during a transmutation."
      }
    ],
    modifiers: [
      {
        text: "Philosopher's Stone",
        description: "You may craft a philosopher's stone to transmute resources outside of your work station. "
      },

      {
        text: "Lord of Alchemy",
        description: "All of your magical abilities gain a small bonus - you are a true mystic."
      }
    ]
  };
});