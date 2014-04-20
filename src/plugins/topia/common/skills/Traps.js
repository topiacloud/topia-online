(function () {

  Topia.Skill.Traps = {
    description: "You are now able to use simple materials to lay traps along the ground.",
    level: 6,
    rarity: 5,
    type: { crafting: 4, exploration: 5 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You may now craft simple traps from basic materials."
      },

      {
        text: "Enables the trap action.",
        description: "The trap action allows you to use a carried trap and activate it in an area."
      },

      {
        text: "Trap spotting.",
        description: "Your experience with traps allows you to spot them from a distance."
      }
    ],
    prefixes: [
      {
        name: "Non-Lethal",
        description: "You may craft traps that are certain to not cause permanent injury."
      },

      {
        name: "Spellbound",
        description: "Although primitive, your traps can be enchanted providing you have the proper magical skills and resources."
      }
    ],
    modifiers: [
      {
        text: "Natural Lure",
        description: "Your traps tend to attract small game. "
      }
    ]
  };
});