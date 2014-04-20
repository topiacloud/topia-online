(function () {

  Topia.Skill.Executions = {
    description: "Making a public example of a social misfit is sometimes more effective than simply removing them from a community.",
    level: 9,
    rarity: 4,
    type: { knowledge: 7, crafting: 5 },
    properties: [
      {
        text: "Enables crafting options.",
        description: "Tools and objects appropriate for public executions are now available to you."
      },

      {
        text: "Enables execution actions.",
        description: "Enables the crucify, behead, hang, and bleed actions. These require certain execution tools to perform."
      }
    ],
    prefixes: [
      {
        name: "Gruesome",
        description: "Your executions are especially grisly, rarely leaving much of the victim left."
      },

      {
        name: "Humane",
        description: "You have access to a series of humane executions - those which do not cause much gore."
      }
    ],
    modifiers: [
      {
        text: "Last Rites",
        description: "Victims of your executions will never rise as undead."
      }
    ]
  };
});