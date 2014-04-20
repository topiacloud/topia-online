(function () {

  Topia.Skill.Combat = {
    description: "Sometimes violence is the only solution. You understand this, and are versed in how to mete out pain.",
    level: 1,
    rarity: 1,
    type: { combat: 1},
    properties: [
      {
        text: "Enables advanced combat options.",
        description: "You now have access to a wide variety of attack and defense options in combat."
      }
    ],
    prefixes: [
      {
        name: "Desperate",
        description: "In addition to normal attacks, you use improvised weapons and the terrain to harm your opponents."
      },
      {
        name: "Ranged",
        description: "You gain bonuses when using ranged weapons."
      },
      {
        name: "Savage",
        description: "Your unarmed attacks are much more powerful."
      },
      {
        name: "Reckless",
        description: "Your fighting style is wild, causing more damage with less accuracy."
      }
    ],
    modifiers: [
      {
        name: "Horrible Wounds",
        description: "You have an increased chance of inflicting grevious wounds."
      }
    ]
  };
});