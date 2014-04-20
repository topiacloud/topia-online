(function () {

  Topia.Skill.Altars = {
    description: "While a temple may be the body of worship for the gods, an altar is the heart. It is here that sacrifices can be made for greater favor.",
    level: 2,
    rarity: 5,
    type: { religion: 4, crafting: 2 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You may now craft altars of various materials."
      },

      {
        text: "Enables the sacrifice action.",
        description: "Utilizing various tools (or fire), you are able to use the sacrifice action on certain objects to offer them as tribute to a god."
      }
    ],
    prefixes: [
      {
        name: "Generous",
        description: "Your altars sometimes bestow rewards on those sacrificing at them."
      },
      {
        name: "Bane",
        description: "You may choose an entity type which weakens considerably when near your altars."
      }
    ],
    modifiers: [
      {
        text: "Thankful Bounty",
        descrption: "The gods look upon your food sacrifices much more favorably."
      },

      {
        text: "Thirst of the Gods",
        description: "Sacrificing living creatures at your altars provides additional effects."
      }
    ]
  };
});