(function () {

  Topia.Skill.MagmaForges = {
    description: "The need for fuel in a forge consumes massive quantities of resources. You are able to harness the power of magma to fuel the fires of industry.",
    level: 5,
    rarity: 5,
    type: { knowledge: 4, crafting: 5 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You are now able to construct magma forges, provided you have access to magma."
      }
    ],
    prefixes: [
      {
        name: "Dwarven",
        description: "Your magma forges are far more durable than others."
      }
    ],
    modifiers: [
      {
        text: "Magma Forged",
        description: "Items forged in your magma forges tend to have higher quality and resistance to the elements."
      }
    ]
  };
});