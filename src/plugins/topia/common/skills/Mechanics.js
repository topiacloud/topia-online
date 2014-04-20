(function () {

  Topia.Skill.Mechanics = {
    description: "Complex moving parts do not elude you. You are able to utilize mechanisms to link objects together.",
    level: 5,
    rarity: 5,
    type: { knowledge: 5, crafting: 6 },
    properties: [
      {
        text: "Enables the link action.",
        description: "Link is a powerful action which allows one or more objects to be linked to a trigger of some kind."
      },

      {
        text: "Expanded crafting options.",
        description: "You may craft mechanisms which are used in any form of linking."
      }
    ],
    prefixes: [
      {
        name: "Complex",
        description: "The limit on how many objects can be linked to a trigger of yours is higher than normal."
      },

      {
        name: "Unorthodox",
        description: "Others have a more difficult time identifying how your linked objects are linked together."
      }
    ],
    modifiers: [
      {
        text: "Clockwork Machinist",
        description: "By using advanced materials, you may create high quality mechanisms used in autonomous machines."
      }
    ]
  };
});