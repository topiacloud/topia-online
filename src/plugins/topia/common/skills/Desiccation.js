(function () {

  Topia.Skill.Desiccation = {
    description: "Drying a corpse for nearly infinite preservation can have certain uses.",
    level: 3,
    rarity: 4,
    type: { knowledge: 4, death: 4 },
    properties: [
      {
        text: "Enables desiccating corpses.",
        description: "You may now use the desiccate action, with the appropriate objects."
      }
    ],
    prefixes: [
      {
        name: "Toxic",
        description: "The corpses you prepare tend to have a high chance of carrying diseases."
      },

      {
        text: "Necromantic",
        description: "Your prepared corpses and parts empower the necromantic arts when used as magical resources."
      }
    ],
    modifiers: [
      {
        text: "Morbid Adornment",
        description: "Your desiccated body parts can be fashioned into amulets and the like."
      }
    ]
  };
});