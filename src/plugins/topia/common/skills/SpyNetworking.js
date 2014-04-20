(function () {

  Topia.Skill.SpyNetworking = {
    description: "Information is power. A spy network is a lot of power.",
    level: 7,
    rarity: 6,
    type: { knowledge: 5, subterfuge: 6 },
    properties: [
      {
        text: "You may use the report action.",
        description: "You may perform the report action. This action provides information on everything a person has seen or heard in a given area over a given period of time."
      }
    ],
    prefixes: [
      {
        name: "Global",
        description: "Your spies also report on randomly generated events that may or may not be true."
      }
    ],
    modifiers: [
      {
        text: "Professional Espionage",
        description: "Your reports may also contain hidden information, such as others using the report action."
      }
    ]
  };
});