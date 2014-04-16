(function () {

  Topia.Skill.PotionCrafting = {
    description: "You are able to use your extensive knowledge of chemicals and alchemy to create potions that can bestow special properties.",
    level: 3,
    rarity: 3,
    type: { crafting: 3, knowledge: 4 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You may brew potions that add, modify, and remove properties from an entity."
      }
    ],
    prefixes: [
      {
        name: "Expedient",
        description: "You brew potions exceptionally quickly."
      }
    ],
    modifiers: [
      {
        text: "Magical Synergy",
        description: "Having skill in the magical arts increases the potency of your potion's effects. "
      }
    ]
  };
});