(function () {

  Topia.Skill.Diplomacy = {
    description: "Diplomacy is the alternative to rampant slaughter occuring between two opposing factions.",
    level: 7,
    rarity: 6,
    type: { knowledge: 7, crafting: 5 },
    properties: [
      {
        text: "Enables crafting options.",
        description: "You may create guild seals for use on documents, as well as other diplomatic objects."
      }
    ],
    prefixes: [
      {
        name: "Benevolent",
        description: "Your diplomatic objects tend to bestow favorable effects on those using them."
      }
    ],
    modifiers: [
      {
        text: "Indisputable Mark",
        description: "Your guild seals are enchanted so that only those you give permission can break them."
      },
    ]
  };
});