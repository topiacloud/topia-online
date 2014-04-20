(function () {

  Topia.Skill.GuerrillaWarfare = {
    description: "You are well versed in the art of wearing down an enemy until they have nothing left.",
    level: 5,
    rarity: 5,
    type: { crafting: 4, exploration: 5 },
    properties: [
      {
        text: "Enables advanced ambush tactics.",
        description: "You are able to use more advanced booby traps, even so far as trapping objects."
      }
    ],
    prefixes: [
      {
        name: "Horrific",
        description: "Your boobytraps tend to leave lasting effects on those targeted."
      },

      {
        name: "Improvised",
        description: "You can set boobytraps in almost any environment with little to no resources."
      }
    ],
    modifiers: [
      {
        text: "Attrition",
        description: "Your traps tend to cause more injury and get detected less often than most. "
      }
    ]
  };
});