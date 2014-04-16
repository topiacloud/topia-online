(function () {

  Topia.Skill.TreatedMaterials = {
    description: "You understand how to specially prepare wood and cloth to be more resistant to wear.",
    level: 1,
    rarity: 1,
    type: { crafting: 2, knowledge: 1 },
    properties: [
      {
        text: "Enables the treat action.",
        description: "You can use the treat action to begin the process of treating a material to be more durable."
      }
    ],
    prefixes: [
      {
        name: "Resilient",
        description: "Treating a material gives it small elemental resistances."
      }
    ],
    modifiers: [
      {
        text: "Advanced Hardening",
        description: "You may treat other materials, such as leather or shell."
      }
    ]
  };
});