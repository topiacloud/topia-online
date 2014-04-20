(function () {

  Topia.Skill.TimedDelays = {
    description: "Rather than the immediate triggering of an effect, you've decided it is sometimes more prudent to have something trigger after a time.",
    level: 6,
    rarity: 6,
    type: { knowledge: 5, crafting: 6 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You now have access to the timed trigger. You can use this in a network of mechanisms in order to cause an effect after a delay that you specify."
      }
    ],
    prefixes: [
      {
        name: "Chaotic",
        description: "Your timed delays can be set to trigger after a random amount of time."
      },

      {
        name: "Precise",
        description: "Your timed triggers never malfunction."
      }
    ],
    modifiers: [
      {
        text: "Resetting Triggers",
        description: "By using advanced mechanisms, you can create timed triggers that reset themselves after each use."
      }
    ]
  };
});