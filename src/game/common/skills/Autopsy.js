(function() {

  Topia.Skill.Autopsy = {
    description: "By opening the corpses of once-living beings, you are able to remove organs and further expand your knowledge of a creature.",
    level: 5,
    rarity: 6,
    type: { knowledge: 2, medical: 4, death: 2 },
    properties: [
      {
        text: "Enables the Autopsy action.",
        description: "You may perform an autopsy on a corpse."
      },

      {
        text: "Enables organ harvesting.",
        description: "You are able to remove organs without damaging them."
      }
    ],
    prefixes: [
      {
        name: "Improvised",
        description: "You do not require special tools to perform an autopsy."
      },
      {
        name: "Sterile",
        description: "Prevents disease transmission from an autopsy."
      },
      {
        name: "Vile",
        description: "The corpse you perform an autopsy on has an increased chance of disease."
      }
    ],
    modifiers: [
      {
        name: "Greater Insight",
        description: "You gain more detailed information from an autopsy."
      },
      {
        name: "Routine Autopsy",
        description: "You are able to perform this action more quickly."
      }
    ]
    };
});