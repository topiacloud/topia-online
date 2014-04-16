(function () {

  Topia.Skill.ChemicalWarfare = {
    description: "There are certain compounds that simply don't care. They destroy things they touch.",
    level: 4,
    rarity: 5,
    type: { crafting: 5, knowledge: 6 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You may now craft specialized canisters which release gases and flasks which shatter on impact."
      },

      {
        text: "Excessively dangerous.",
        discount: true,
        description: "Using these types of weapons in any civilized area can have disasterous consequences."
      },

      {
        text: "Morally offensive.",
        discount: true,
        description: "Indiscriminate use of chemical weapons is almost as bad as nerve stapling."
      }
    ],
    prefixes: [
      {
        name: "Ranged",
        description: "You may craft specialized launchers for your chemical containers."
      },
      {
        name: "Practiced",
        description: "You have slight resistances to chemicals due to constant exposure."
      }
    ],
    modifiers: [
      {
        text: "Shatterglass",
        description: "Your flasks can cause bleeding wounds when they shatter against a target."
      }
    ]
  };
});