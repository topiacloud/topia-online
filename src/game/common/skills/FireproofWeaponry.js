(function () {

  Topia.Skill.FireproofWeaponry = {
    description: "In addition to having weapons that don't catch fire, utilizing extreme temperatures in weapons can be advantageous.",
    level: 7,
    rarity: 7,
    type: { knowledge: 6, crafting: 7 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You may now craft weapon components that cannot be damage from heat."
      }
    ],
    prefixes: [
      {
        name: "Tempered",
        description: "Your weapons are incredibly durable from extreme tempering."
      }
    ],
    modifiers: [
      {
        text: "Tempered Soul",
        description: "Your fireproof weapons confer a small resistance to fire on the wielder."
      }
    ]
  };
});