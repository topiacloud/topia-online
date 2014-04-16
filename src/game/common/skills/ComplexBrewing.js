(function () {

  Topia.Skill.ComplexBrewing = {
    description: "While basic chemistry can provide most substances, more refined mixtures require complex brewing.",
    level: 3,
    rarity: 3,
    type: { crafting: 3, knowledge: 4 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You are able to craft stills, mixing vats, and other objects related to brewing liquids."
      },

      {
        text: "Enables the brew action.",
        description: "This action allows you to brew, cook, and mix liquids to eventually produce a new liquid."
      },

      {
        text: "Extremely dangerous.",
        discount: true,
        description: "Brewing flammable liquids can be extremely hazardous to your health."
      }
    ],
    prefixes: [
      {
        name: "Baneful",
        description: "All mixtures you create are harmful to a random creature type."
      },
      {
        name: "Precise",
        description: "Your brews are of higher quality than most, although they take longer to craft."
      }
    ],
    modifiers: [
      {
        text: "Enchanted Cauldron",
        description: "By using additional materials, you may enchant your brews with additional effects."
      }
    ]
  };
});