(function () {

  Topia.Skill.HerbalPowders = {
    description: "By grinding herbs into a fine powder, you can more easily store your mixtures.",
    level: 1,
    rarity: 1,
    type: { crafting: 1, knowledge: 1 },
    properties: [
      {
        text: "Enables the grind action.",
        description: "The grind action allows you to use certain tools to create an herbal powder from one or more resources."
      }
    ],
    prefixes: [
      {
        name: "Quickened",
        description: "You process herbs into powder extremely quickly."
      },
      {
        name: "Experimental",
        description: "You can mix absolutely any kind or number of herbs with varying results, including catastrophic failures."
      }
    ],
    modifiers: [
      {
        text: "Attunement",
        description: "Your herbal powders are much more potent."
      }
    ]
  };
});