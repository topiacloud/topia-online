(function () {

  Topia.Skill.Glues = {
    description: "Sometimes nails aren't appropriate or viable for attaching objects together. This is where glue comes in.",
    level: 5,
    rarity: 5,
    type: { crafting: 6 },
    properties: [
      {
        text: "Enables crafting options.",
        description: "You may now craft glue, given the proper resources and a container."
      },

      {
        text: "Enables the glue action.",
        description: "You are able to use the glue action. This will attach one item to another using glue."
      }
    ],
    prefixes: [
      {
        name: "Super",
        description: "Your glues have extremely high durability."
      },

      {
        name: "Toxic",
        description: "Any attempting to interact with your glued objects may be exposed to toxins."
      }
    ],
    modifiers: [
      {
        text: "Quick Fix",
        description: "You may use your glues to make minor repairs to certain armor and weapon types."
      },

      {
        text: "Universal Adhesive",
        description: "Your glues may be used in place of other materials in many crafting recipes."
      }
    ]
  };
});