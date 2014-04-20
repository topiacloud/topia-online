(function () {

  Topia.Skill.CropRotation = {
    description: "More advanced farming techniques include allowing fields to be fallow for a period to allow stronger crop growth later on.",
    level: 2,
    rarity: 2,
    type: { knowledge: 2 },
    properties: [
      {
        text: "Field analysis.",
        description: "You can examine a plot of farm land to determine what is growing there, or if it is fallow, and for how long."
      }
    ],
    prefixes: [
      {
        name: "Efficient",
        description: "Your field's fallow period takes a shorter amount of time to become fertile."
      }
    ],
    modifiers: [
      {
        text: "Enchant Land",
        description: "With the appropriate magical skill, you can enchant fallow land under your control to bestow elemental properties."
      }
    ]
  };
});