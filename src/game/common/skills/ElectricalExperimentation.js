(function () {

  Topia.Skill.ElectricalExperimentation = {
    description: "It would appear that through the use of electrical energies, electrical current can be used to provide interesting effects.",
    level: 2,
    rarity: 4,
    type: { knowledge: 5 },
    properties: [
      {
        text: "You can now use electrical reactions.",
        description: "Enables formulae which generate currents."
      },

      {
        text: "Enables the electrolyze action.",
        description: "Enables the electrolyze action to be used on entities to change their properties."
      },

      {
        text: "Can be dangerous.",
        description: "Electrical experiments can be damaging to your own body."
      }
    ],
    prefixes: [
      {
        name: "Arcing",
        description: "Your currents tend to leap out at other entities randomly."
      },

      {
        name: "Powerful",
        description: "Your electrical experiments tend to have more current running through them than normal."
      }
    ],
    modifiers: [
      {
        text: "Practiced Experimentation",
        description: "You have slight bonuses to electrical resistance as well as a much lower chance of catastrophic failure in your use of electricity."
      }
    ]
  };
});