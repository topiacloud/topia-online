(function () {

  Topia.Skill.SecretSocieties = {
    description: "You understand that it's not always a positive thing to be well known. This is also true for organizations.",
    level: 8,
    rarity: 6,
    type: { knowledge: 5, subterfuge: 7 },
    properties: [
      {
        text: "Enables secret guilds.",
        description: "You may choose to create an organization that does not show influence expenditures anywhere in the game world."
      }
    ],
    prefixes: [
      {
        name: "Invisible",
        description: "Your organization does not have a public roster, charter, or other information."
      }
    ],
    modifiers: [
      {
        text: "Indoctrination",
        description: "You may require that some or all members of your organization enter a binding oath preventing them from leaving the organization."
      }
    ]
  };
});