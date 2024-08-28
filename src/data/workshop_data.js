const Workshop_image = '/workshop.png';

const Workshop_data = [
  {
    id: 1,
    title: "Impact Arcade: level up for sustainability - A Game developing competition",
    prizeWinner: 9000,
    prizeRunner: 4000,
    domain: "Game Development",
    team: "●  Each team can consist of a maximum of 2 players.\n● Individual participants are also allowed to compete solo.",
    location: 'Tech Lab',
    description: "Game Jam is an intense 24-hour game development competition where teams are tasked with creating engaging and thoughtful games based on the theme that will be announced on the day of the competition. This theme will be related to the United Nations Sustainable Development Goals (SDGs), ensuring the games focus on relevant global issues.",
    date: "2024-09-15",
    image: Workshop_image,
    coordinators: [
      {
        name: "Karunya  Harikrishnan",
      },
      {
        name: "Saanjith Reddy",
      },
    ],
    rules: [
      {
        rule_name: "Time Limit",
        rule_desc: "The competition runs for 24 hours, starting from the official theme announcement.",
      },
      {
        rule_name: "Judging Criteria",
        rule_desc: "Games will be judged based on creativity, gameplay, adherence to the theme, and technical execution.",
      },
      {
        rule_name: "Mentor Feedback",
        rule_desc: "Teams can earn additional points by incorporating feedback from mentors after the first 12 hours of the competition.",
      },
      {
        rule_name: "Original Work",
        rule_desc: "All content, including code, art, and audio, must be created during the Game Jam. Pre-existing assets are not allowed, except for fonts and publicly available libraries/frameworks.",
      },
      {
        rule_name: "Use of Tools",
        rule_desc: "Participants are free to use any game development tools, engines, or frameworks of their choice, as long as they adhere to the competition’s theme and time constraints.",
      },
      {
        rule_name: "Theme Adherence",
        rule_desc: "Games must clearly reflect the given theme, related to the United Nations SDGs. Creativity in interpreting and integrating the theme is encouraged.",
      },
      {
        rule_name: "Submission",
        rule_desc: "Games must be submitted before the 24-hour deadline. Late submissions will not be accepted.",
      },
      {
        rule_name: "Platforms",
        rule_desc: "The game must be playable on at least one of the following platforms: Windows, macOS, Linux, or a web browser.",
      },
      {
        rule_name: "Code Submission",
        rule_desc: "The full source code must be submitted alongside the game, with clear instructions on how to run the game.",
      },
    ]
  },
];

export default Workshop_data;
