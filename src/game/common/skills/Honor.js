(function () {

  Topia.Skill.Honor = {
    description: "Having a personal code of ethics is not only admirable, but also sought after by people of power.",
    level: 6,
    rarity: 6,
    type: { knowledge: 5 },
    properties: [
      {
        text: "You may enter into unbreakable pacts with others.",
        description: "You can hold someone to an agreement at the expense of influence."
      },

      {
        text: "You may not break agreements.",
        description: "You are no longer able to opt out of agreements through subterfuge."
      }
    ],
    prefixes: [
      {
        name: "Oathbound",
        description: "You may use magical enchantments to punish those who break a pact with you."
      }
    ],
    modifiers: [
      {
        text: "Honor Bound",
        description: "When you enter an agreement with another party, no one else can enter an agreement with them. "
      }
    ]
  };
});