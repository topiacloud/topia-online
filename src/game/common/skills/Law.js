(function () {

  Topia.Skill.Law = {
    description: "At some point, the threat of violence is either impractical, or extreme. The rule of law ensures a more balanced approach to order in an area.",
    level: 8,
    rarity: 8,
    type: { knowledge: 7 },
    properties: [
      {
        text: "Enables laws.",
        description: "You may now view the laws of an area, or create your own laws by investing influence into them."
      }
    ],
    prefixes: [
      {
        name: "Large",
        description: "Your government has more position slots to be assigned to whom you choose."
      }
    ],
    modifiers: [
      {
        name: "Ordinances",
        description: "You can assign specific laws to certain areas of a zone."
      }
    ]
  };
});