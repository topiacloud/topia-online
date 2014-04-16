(function () {

  Topia.Skill.CorpseEradication = {
    description: "Sometimes simply burying a body isn't the best thing to do. This is where chemistry (or nature) can step in.",
    level: 1,
    rarity: 2,
    type: { knowledge: 1, death: 2 },
    properties: [
      {
        text: "Allows corpse eradication.",
        description: "You may now destroy corpses with certain chemical blends."
      }
    ],
    prefixes: [
      {
        name: "Total",
        description: "Corpses you eradicate leave no trace whatsoever."
      }
    ],
    modifiers: [
      {
        text: "Without A Trace",
        description: "Your eradication attempts also consume all items on the corpse."
      }
    ]
  };
});