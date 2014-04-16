(function () {

  Topia.Skill.Carpentry = {
    description: "You are skilled in the art of turning wood into things. This is always useful.",
    level: 2,
    rarity: 2,
    type: { crafting: 3 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You are able to craft walls, doors, fences, and other wooden crafts."
      },

      {
        text: "Tool crafting.",
        description: "Hammers, saws, workbenches, and other carpentry tools are now craftable."
      }
    ],
    prefixes: [
      {
        name: "Expert",
        description: "All objects you create with carpentry have higher durability and quality."
      },

      {
        name: "Exotic",
        description: "You are able to craft several uncommon objects."
      }
    ],
    modifiers: [
      {
        text: "Masterwork Tools",
        description: "You can create tools of the highest quality."
      }
    ]
  };
});