(function () {

  Topia.Skill.Writing = {
    description: "Oral speech is a powerful tool for recording history. Writing is superior in the sense that written word tends to last longer than people.",
    level: 5,
    rarity: 3,
    type: { knowledge: 3 },
    properties: [
      {
        text: "Enables writing.",
        description: "You can now use various objects to write on other objects."
      }
    ],
    prefixes: [
      {
        name: "Speed",
        description: "Shortens the time to write on an object."
      },
      {
        name: "Mystic",
        description: "Writing consumes reagents but can be performed without a writing tool."
      }
    ],
    modifiers: [
      {
        name: "Penmanship",
        description: "Your writing tool loses durability much more slowly from writing."
      }
    ]
  };
});