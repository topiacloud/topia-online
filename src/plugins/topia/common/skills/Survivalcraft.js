(function () {

  Topia.Skill.SurvivalCraft = {
    description: "You have learned the basics of surviving in the wilderness. You can now craft simple weapons and tools from scavenged materials.",
    level: 1,
    rarity: 1,
    type: { crafting: 1, exploration: 1 },
    properties: [
      {
        text: "Expanded crafting.",
        description: "You may now use found resources to craft simple weapons and tools."
      }
    ],
    prefixes: [
      {
        name: "Practiced",
        description: "Your primitive tools and weapons are much more durable than most."
      },

      {
        name: "Maintained",
        description: "You can easily repair your primitive tools and weapons."
      }
    ],
    modifiers: [
      {
        text: "Custom Tools",
        description: "You gain bonuses when using primitive weapons or tools you have crafted."
      }
    ]
  };
});