(function () {

  Topia.Skill.Plumbing = {
    description: "Rather than having to ferry water from a source for crafting and refreshment, you are able to lay pipes that do the job for you.",
    level: 4,
    rarity: 5,
    type: { knowledge: 4, crafting: 4 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You may now place pipe sections under the ground. You can also craft sinks, pumps, and other water related objects."
      }
    ],
    prefixes: [
      {
        name: "Reliable",
        description: "Your plumbing objects will almost never malfunction."
      },

      {
        name: "Filtered",
        description: "Entities and impurities have a difficult time infiltrating your plumbing systems."
      }
    ],
    modifiers: [
      {
        text: "Enchanted Plumbing",
        description: "You may craft plumbing related objects that can be enchanted with a variety of effects."
      }
    ]
  };
});