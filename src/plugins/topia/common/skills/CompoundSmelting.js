(function () {

  Topia.Skill.CompoundSmelting = {
    description: "Your extensive knowledge of smelting various metals allows you to easily identify these alloys.",
    level: 5,
    rarity: 5,
    type: { knowledge: 5, crafting: 5 },
    properties: [
      {
        text: "Metal identification.",
        description: "You are able to identify the metals used to create an item, simply by examining that item."
      }
    ],
    prefixes: [
      {
        name: "knowledgeable",
        description: "You also gain information on the strengths and weaknesses of a metal by examining it."
      }
    ],
    modifiers: [
      {
        text: "Total Identification",
        description: "You may identify all entities used in the production of an item simply by examining it."
      }
    ]
  };
});