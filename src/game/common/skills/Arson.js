define(["common/skills"], function(skills) {

    skills.Arson = {

        description: "You realize that most problems in life can be solved by burning them to the ground.",
        level: 5,
        rarity: 6,
        type: { combat: 3, fire: 5 },
        properties: [
          {
            text: "Enables the burn action.",
            description: "You may now apply a source of flame to an entity in order to raise the temperature of that entity."
          },
          {
            text: "Expanded crafting options.",
            description: "You may craft firebombs, bonfires, and other arson related objects."
          },
          {
            text: "Detrimental to health.",
            discount: true,
            description: "Fire tends to kill things. Caution is advised.",
          },

          {
            text: "Socially unacceptable.",
            discount: true,
            description: "People generally become irate when you consume their settlement in flame."
          }
        ],
        prefixes: [
          {
            name: "Sacrificial",
            description: "You may also craft special pyres for sacrificing entities."
          },
          {
            name: "Murderous",
            description: "You may commit arson against a downed foe."
          }
        ],
        modifiers: [
          {
            name: "Pyromania",
            description: "You set fires more quickly than ever!"
          }
        ]
      }
    };
});


(function () {

  Topia.Skill.Arson = {
    description: "You realize that most problems in life can be solved by burning them to the ground.",
    level: 5,
    rarity: 6,
    type: { combat: 3, fire: 5 },
    properties: [
      {
        text: "Enables the burn action.",
        description: "You may now apply a source of flame to an entity in order to raise the temperature of that entity."
      },
      {
        text: "Expanded crafting options.",
        description: "You may craft firebombs, bonfires, and other arson related objects."
      },
      {
        text: "Detrimental to health.",
        discount: true,
        description: "Fire tends to kill things. Caution is advised.",
      },

      {
        text: "Socially unacceptable.",
        discount: true,
        description: "People generally become irate when you consume their settlement in flame."
      }
    ],
    prefixes: [
      {
        name: "Sacrificial",
        description: "You may also craft special pyres for sacrificing entities."
      },
      {
        name: "Murderous",
        description: "You may commit arson against a downed foe."
      }
    ],
    modifiers: [
      {
        name: "Pyromania",
        description: "You set fires more quickly than ever!"
      }
    ]
  };
});