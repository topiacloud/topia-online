(function () {

  Topia.Skill.Milling = {
    description: "More advanced farming techniques include allowing fields to be fallow for a period to allow stronger crop growth later on.",
    level: 4,
    rarity: 3,
    type: { knowledge: 4 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You may craft millstones and querns."
      },

      {
        text: "Enables the mill action.",
        description: "Milling an object will attempt to grind it into a powder of some kind."
      }
    ],
    prefixes: [
      {
        name: "Expedient",
        description: "It takes you much less time to mill something."
      },

      {
        text: "Mystical",
        description: "You very rarely gain magical essence from milling things."
      }
    ],
    modifiers: [
      {
        text: "Primitive Milling",
        description: "You suffer no penalties to quality or quantity to the products of your milling."
      }
    ]
  };
});