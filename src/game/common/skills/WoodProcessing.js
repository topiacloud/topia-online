(function () {

  Topia.Skill.WoodProcessing = {
    description: "You are able to take raw peices of wood and refine them into more useful articles.",
    level: 2,
    rarity: 2,
    type: { crafting: 3 },
    properties: [
      {
        text: "Enables the process action.",
        description: "The process action can be used on raw timber to turn it into boards, mulch, strands, among other things."
      }
    ],
    prefixes: [
      {
        name: "Surplus",
        description: "You produce more processed material when you use the process action."
      }
    ],
    modifiers: [
      {
        text: "Well Processed",
        description: "Your processed goods have slight resistance to the elements."
      }
    ]
  };
});