(function () {

  Topia.Skill.Ballistae = {
    description: "A combination of mechanical aptitude and ballistic knowledge has enabled you to build the largest crossbow ever.",
    level: 8,
    rarity: 7,
    type: { crafting: 6, tinkering: 5 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You are able to construct ballistae and ballistae bolts."
      }
    ],
    prefixes: [
      {
        name: "Mystic",
        description: "You may enchant your creations with elemental properties at the time of construction."
      },
      {
        name: "Improvised",
        description: "You may instead use more commonly found materials at a cost of quality."
      }
    ],
    modifiers: [
      {
        name: "Machinist",
        description: "Your constructions are more durable."
      },

      {
        name: "Experimental Ballista",
        description: "You may craft a ballista which fires more rapidly, but malfunctions at random."
      }
    ]
  };
});