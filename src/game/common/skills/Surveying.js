(function () {

  Topia.Skill.Surveying = {
    description: "This ability allows you to scour the land for buildable locations and resource nodes.",
    level: 3,
    rarity: 3,
    type: { exploration: 4 },
    properties: [
      {
        text: "Enables the survey action.",
        description: "This action allows you to define either level terrain, or a resource type to search for. You will then receive an indicator as to how close you are to your goal."
      }
    ],
    prefixes: [
      {
        name: "Marked",
        description: "When you successfully survey for a resource, your map will record the location."
      },

      {
        name: "Detailed",
        description: "You will receive information regarding recommended building types depending on nearby resources in relation to the surveyed area."
      }
    ],
    modifiers: [
      {
        text: "Mass Survey",
        description: "You may define an area to survey rather than surveying for specific things."
      }
    ]
  };
});