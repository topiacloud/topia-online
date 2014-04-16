(function () {

  Topia.Skill.Innkeeping = {
    description: "Providing room and board as an income source can be much more effective than clubbing someone with a rock. You grasp this.",
    level: 2,
    rarity: 2,
    type: { crafting: 3 },
    properties: [
      {
        text: "Enables crafting options.",
        description: "You may craft inn related objects such as bar counters, bedrolls, and large stoves."
      },

      {
        text: "Enables room letting contracts.",
        description: "You may now rent rooms to a person in exchange for influence."
      }
    ],
    prefixes: [
      {
        name: "Warded",
        description: "Your patrons are protected from thievery and the like."
      },

      {
        name: "Comforting",
        description: "Your patrons benefit more from food cooked in your establishment, or when they rest on your bedrolls."
      }
    ],
    modifiers: [
      {
        text: "Bouncers",
        description: "Minions ordered to protect your inn receive slight bonuses to related abilities."
      }
    ]
  };
});