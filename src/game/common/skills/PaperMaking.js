(function () {

  Topia.Skill.PaperMaking = {
    description: "All of the knowledge in the world is pointless without this skill. You make paper.",
    level: 2,
    rarity: 2,
    type: { crafting: 3 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "Using wood products, you can create paper of various qualities."
      }
    ],
    prefixes: [
      {
        name: "Primitive",
        description: "You can make low quality paper with common materials such as leather."
      },

      {
        name: "Morbid",
        description: "You can make paper out of humanoid flesh."
      }
    ],
    modifiers: [
      {
        text: "Magic Paper",
        description: "Using magical resources, you can make paper that can be reused indefinitely."
      }
    ]
  };
});