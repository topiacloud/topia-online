(function () {

  Topia.Skill.MagmaproofMaterials = {
    description: "Through various experimentation, you've discovered that certain materials will not be damaged by magma.",
    level: 6,
    rarity: 6,
    type: { knowledge: 5, crafting: 6 },
    properties: [
      {
        text: "Magma proof identification.",
        description: "You may now simply examine an object to determine if it is magma proof."
      }
    ],
    prefixes: [
      {
        name: "Estimated",
        description: "You can also determine how magma resistant an object is, rather than just if it is magmaproof or not."
      }
    ],
    modifiers: [
      {
        text: "Magmaproof Magic",
        description: "You can identify enchantments on an object that have made it magmaproof."
      }
    ]
  };
});