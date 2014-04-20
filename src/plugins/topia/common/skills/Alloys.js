(function () {

  Topia.Skill.Alloys = {
    description: "By combining two or more metals together, you can create new materials that have different properties.",
    level: 5,
    rarity: 5,
    type: { knowledge: 4, crafting: 5 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You may now smelt bronze and brass."
      }
    ],
    prefixes: [
      {
        name: "Experimental",
        description: "You may combine any number of metals to create alloys of varying quality."
      }
    ],
    modifiers: [
      {
        text: "Ether Alloys",
        description: "You may use magical resources in your alloy smelting to create alloys with magical properties."
      }
    ]
  };
});