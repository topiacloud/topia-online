(function () {

  Topia.Skill.Language = {
    description: "You understand language, and can communicate in an effective and widely accepted manner.",
    level: 3,
    rarity: 3,
    type: { knowledge: 3 },
    properties: [
      {
        text: "Enables multiple languages.",
        description: "You can now opt to speak in a different language, in order to have more exclusive conversations."
      },

      {
        text: "Enables reading another language.",
        description: "You are able to read the extra language you have chosen."
      }
    ],
    prefixes: [
      {
        name: "Arcane",
        description: "Your spell power is increased."
      },
      {
        name: "Unnatural",
        description: "You may speak in a wholly unnatural language. This may have adverse effects."
      },
      {
        name: "Standard",
        description: "You may speak in another language."
      }
    ],
    modifiers: [
      {
        name: "Sign Language",
        description: "You may effectively communicate even when silenced by some means."
      }
    ]
  };
});