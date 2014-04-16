(function () {

  Topia.Skill.Cyphering = {
    description: "You understand the need for descretion when sending messages. Cyphering is the ability to encode a document.",
    level: 6,
    rarity: 6,
    type: { knowledge: 3, subterfuge: 5 },
    properties: [
      {
        text: "Enables the cypher and decypher actions.",
        description: "This action allows you to assign a cypher to a document. It will appear as gibberish to any who do not possess the cypher."
      }
    ],
    prefixes: [
      {
        name: "Mystic",
        description: "You may attach an effect to your cypher which will trigger when someone fails to decypher it."
      },
      {
        name: "Bound",
        description: "Your cyphers can only be decyphered by one other person, chosen at the time of cyphering."
      }
    ],
    modifiers: [
      {
        name: "Doubletalk",
        description: "You can now use a cypher while speaking."
      }
    ]
  };
});