(function () {

  Topia.Skill.Hospitals = {
    description: "Hospitals are areas dedicated to the medical treatment of a community.",
    level: 7,
    rarity: 6,
    type: { knowledge: 5, medicine: 5, crafting: 6 },
    properties: [
      {
        text: "Enables crafting options.",
        description: "You are able to craft objects for use in a hospital."
      }
    ],
    prefixes: [
      {
        name: "Sterile",
        description: "Your hospital objects are much less likely to be diseased."
      }
    ],
    modifiers: [
      {
        text: "Natural Influence",
        description: "You tend to influence those around you simply by being around them."
      }
    ]
  };
});