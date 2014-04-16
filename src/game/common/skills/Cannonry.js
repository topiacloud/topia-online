(function () {

  Topia.Skill.Cannonry = {
    description: "You have taken the idea of using combustion to project an object to an entirely new to level - you may now craft cannon.",
    level: 9,
    rarity: 9,
    type: { crafting: 8, chemistry: 5 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You may now craft cannon and the ammunition for them."
      }
    ],
    prefixes: [
      {
        name: "Massive",
        description: "Your cannons are much more powerful, but tend to malfunction."
      },
      {
        name: "Attuned",
        description: "You may enchant ammunition with elemental properties."
      },
      {
        name: "Juryrigged",
        description: "You require less materials than normal, but your cannons malfunction frequently."
      }
    ],
    modifiers: [
      {
        name: "Bronze Cannons",
        description: "It takes more materials to construct your cannon, but it has superior range."
      },

      {
        name: "Junk Shot",
        description: "You may use various miscellanous objects as ammunition."
      }
    ]
  };
});