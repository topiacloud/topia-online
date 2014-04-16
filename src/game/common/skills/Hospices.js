(function () {

  Topia.Skill.Hospices = {
    description: "Essentially just a preemptive graveyard, a hospice is an area where the dying or diseased can be given some comfort (and containment) before the end.",
    level: 6,
    rarity: 6,
    type: { crafting: 4, knowledge: 5 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You may craft certain objects for a hospice, such as corpse rags."
      }
    ],
    prefixes: [
      {
        name: "Charnel",
        description: "Guests at your hospices tend to expire more quickly."
      },

      {
        name: "Sterile",
        description: "Your hospices tend to be disease free."
      }
    ],
    modifiers: [
      {
        text: "Necromantic Collection",
        description: "Those who die in your hospices can have their souls harvested with certain tools."
      },

      {
        text: "Hallowed Ground",
        description: "Your hospices are protected from necromantic forces."
      }
    ]
  };
});