(function () {

  Topia.Skill.WaterPower = {
    description: "You have grasped that moving water can move other objects. The next logical step is to use this energy to power something.",
    level: 4,
    rarity: 4,
    type: { knowledge: 4, crafting: 3 },
    properties: [
      {
        text: "Expanded crafting options.",
        description: "You may now craft a waterwheel. This is only effective if moving water it used with it."
      }
    ],
    prefixes: [
      {
        name: "Superior",
        description: "Your water wheels tend to turn faster than most, which generates more power."
      },

      {
        name: "Improvised",
        description: "Your water wheels are of lower quality, but can be made out of more common materials."
      }
    ],
    modifiers: [
      {
        text: "Simple Components",
        description: "You do not require standard mechanisms to use your water wheels."
      }
    ]
  };
});