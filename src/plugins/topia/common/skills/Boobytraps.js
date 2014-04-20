(function () {

  Topia.Skill.Boobytraps = {
    description: "One should not fear the unknown. Unless the unknown is a wooden spike to the throat.",
    level: 5,
    rarity: 5,
    type: { crafting: 4, exploration: 5 },
    properties: [
      {
        text: "Enables boobytrapping.",
        description: "You are able to design simple boobytraps out of natural materials."
      }
    ],
    prefixes: [
      {
        name: "Primitive",
        description: "Boobytraps made with primitive materials are more durable and effective than normal."
      },

      {
        name: "Camoflagued",
        description: "Your boobytraps have a much lower chance to be detected."
      }
    ],
    modifiers: [
      {
        text: "Primitive Triggers",
        description: "You may attach a boobytrap to any object in the game that can be interacted with."
      }
    ]
  };
});