(function () {

  Topia.Skill.WeatherForecasting = {
    description: "By monitoring cloud patterns and wind directions, you are able to primitively predict the changing weather.",
    level: 0,
    rarity: 1,
    type: { knowledge: 2, air: 2, nature: 3 },
    properties: [
      {
        text: "Enables the predict action.",
        description: "You can now attempt to predict the weather."
      },
      {
        text: "You can give inaccurate predictions.",
        description: "Sometimes your predictions will be incorrect."
      }
    ],
    prefixes: [
      {
        name: "Accurate",
        description: "Your predictions are much more accurate."
      },
      {
        name: "Blasphemous",
        description: "Your air magic power is greatly increased, however your forecasting can cause punishment from the gods."
      }
    ],
    modifiers: [
      {
        name: "Attuned",
        description: "Your air magic power is increased from your attunement with the heavens."
      }
    ]
  };
});