(function () {

  Topia.Skill.Decoys = {
    description: "Fooling an enemy into wasting time and resources is always a viable strategy. You may now create decoy entities that appear to be the real thing.",
    level: 7,
    rarity: 6,
    type: { subterfuge: 5, crafting: 4 },
    properties: [
      {
        text: "Enables the decoy action.",
        description: "This action permits you to expend resources in order to mimic another entity. This decoy can be placed in an area."
      }
    ],
    prefixes: [
      {
        name: "Deadly",
        description: "You can utilize other technical or magical skills to create decoys that can harm others."
      },

      {
        name: "Resilient",
        description: "Your decoys are much more durable."
      }
    ],
    modifiers: [
      {
        text: "Perfect Replica",
        description: "Your decoys tend to have the same properties as the base object."
      }
    ]
  };
});