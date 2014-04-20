(function () {

  Topia.Skill.WindPower = {
    description: "Just as the wind can blow over a tent, so too can it power a windmill.",
    level: 5,
    rarity: 5,
    type: { knowledge: 5, crafting: 4 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You may now craft a windmill. This massive structure typically powers a millstone, but can be used for other things."
      }
    ],
    prefixes: [
      {
        name: "Superior",
        description: "Your windmills tend to turn faster than most, which generates more power."
      },

      {
        name: "Improvised",
        description: "Your windmills are of lower quality, but can be made out of more common materials."
      }
    ],
    modifiers: [
      {
        text: "Simple Components",
        description: "You do not require standard mechanisms to use your windmills."
      },

      {
        text: "Slaughtermill",
        description: "You can create a unique windmill that uses the wind to process corpses (or the living)."
      }
    ]
  };
});