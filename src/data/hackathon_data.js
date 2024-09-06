const hackathon_image = "/hackathon.jpg";
const Workshop_image = '/workshop.png';

const hackathon_data = [
  {
    id: 1,
    title: "Hackinfinity",
    prizeWinner: 12000,
    prizeRunner: 8000,
    prizeSecondRunner: 5000,
    location: "TBD",
    description:
      "The flagship event of the Invente, emerges as a celebration of ingenuity, collaboration, and relentless passion for problem-solving. Problem statements are chosen in the fields of Healthcare, Renewable Energy, Fintech, Sustainability, Smart cities, supply chain and logistics, Agritech, Education and Tourism. It's not just another hackathon, it is a whirlwind of imagination and coding prowess that unfolds over the course of 24 hours where aspiring developers, designers, and creators converge to transform their ideas into reality.\n\nGeneral instructions:\n1. All the team members must have proper internet connection.\n2. Participants are required to have their own components and software in order to implement their solution (including extension boxes).\n3. Each team will be allocated separate mentors.\n4. Mentorship for technical skills will be provided.\n5. Participants are supposed to build their product/solution during the Hackathon.\n6. Participants are allowed to use existing libraries or components, however only the work done during the 24 hrs will be considered for evaluation.\n7. Solutions/products can be a mix of hardware and software technologies, but can be purely software or hardware based as well.\n8. Participants will be informed of the order in which reviews will happen and must attend their meetings at the specified times.\n9. Solutions/products will be judged based on Innovation, Impact, Feasibility and Marketability.\n10. Organizers will be available for any further help/queries.",
    date: "TBD",
    coordinators: [
      {
        name: "Sanjay B",
        ph: "+91 73058 34440",
      },
      {
        name: "Nadhim",
        ph: "+91 73054 21618",
      },
    ],
    image: hackathon_image,
    rounds: [
      {
        id: "round_1",
        round_name: "Domains for Problem Statement",
        round_desc:
          "1. Healthcare technologies.\n   2. Fintech.\n   3. Renewable energy and sustainability.\n   4. Smart cities and infrastructure.\n   5. Education technology\n   6. Agritech.\n   7. Supply chain and logistics.\n   8. Student innovation (open idea)",
      },
      {
        id: "round_2",
        round_name: "Schedule",
        round_desc:
          "Day 1:\n● 10.30 AM – Introduction.\n● 11.00 AM – Hackathon begins.\n● 03.00 PM – First Review.\n● 9.00 PM – Second Review.\n\n\nDay 2:\n● 08.00 AM – Third Review.\n● 11.00 AM – Hackathon ends.\n● 12.00 PM – Final Presentation.\n● 03.30 PM – Valedictory.",
      },
      {
        id: "round_3",
        round_name: "First review",
        round_desc:
          "1. Teams are expected to explain their problem statement, background study done and the workflow of their solution.\n   2. Teams will be judged on the novelty of their problem statement and the clarity in their approach moving forward.\n   3. Advice on how to proceed further will be provided",
      },
      {
        id: "round_4",
        round_name: "Second Review",
        round_desc:
          "1. This review is a checkpoint to track the team’s progress.\n 2. The reviewers will give their input and their thoughts on the team’s solution and changes if there any are warranted.",
      },
      {
        id: "round_5",
        round_name: "Third review",
        round_desc:
          "1. Teams are expected to implement the changes given in the previous review by the reviewers.\n   2. In this round, the teams are reviewed based on their progress in accordance with their proposed workflow and closeness to completion of the project.",
      },
      {
        id: "round_6",
        round_name: "Final Presentation",
        round_desc:
          "1. In this round, teams will be evaluated based on presentation skills, ability to explain their idea in a lucid manner and the degree of innovation in their solution.\n   2. Teams which address the marketability of their product will be awarded additional points. The hackathon will follow a leaderboard system. The final score will be the cumulative points gained by the team over the three reviews and final presentation. The team with the highest score will be announced the winner of the hackathon. Decisions taken by the review panel will be final in all regards.",
      },
    ],
  },
  {
    id: 2,
    title: "Impact Arcade(Game Jam) 24 Hour Hackathon",
    prizeWinner: 8000,
    prizeRunner: 4000,
    prizeSecondRunner: "None",
    domain: "Game Development",
    location: 'TBD',
    description: "Game Jam is an intense 24-hour game development competition where teams are tasked with creating engaging and thoughtful games based on the theme that will be announced on the day of the competition. This theme will be related to the United Nations Sustainable Development Goals (SDGs), ensuring the games focus on relevant global issues.",
    date: "TBD",
    image: Workshop_image,
    coordinators: [
      {
        name: "Karunya  Harikrishnan +91 7305634359",
      },
      {
        name: "Saanjith Reddy +91 9492753456",
      },
    ],
    rounds: [
      {
        id: "round_1",
        round_name: "Team Composition",
        round_desc: "Each team can consist of a maximum of 2 players.\nIndividual participants are also allowed to compete solo.",
      },
      {
        id: "round_2",
        round_name: "Time Limit",
        round_desc: "The competition runs for 24 hours, starting from the official theme announcement.",
      },
      {
        id: "round_3",
        round_name: "Judging Criteria",
        round_desc: "Games will be judged based on creativity, gameplay, adherence to the theme, and technical execution.",
      },
      {
        id: "round_4",
        round_name: "Mentor Feedback",
        round_desc: "Teams can earn additional points by incorporating feedback from mentors after the first 12 hours of the competition.",
      },
      {
        id: "round_5",
        round_name: "Original Work",
        round_desc: "All content, including code, art, and audio, must be created during the Game Jam. Pre-existing assets are not allowed, except for fonts and publicly available libraries/frameworks.",
      },
      {
        id: "round_6",
        round_name: "Use of Tools",
        round_desc: "Participants are free to use any game development tools, engines, or frameworks of their choice, as long as they adhere to the competition’s theme and time constraints.",
      },
      {
        id: "round_7",
        round_name: "Theme Adherence",
        round_desc: "Games must clearly reflect the given theme, related to the United Nations SDGs. Creativity in interpreting and integrating the theme is encouraged.",
      },
      {
        id: "round_8",
        round_name: "Submission",
        round_desc: "Games must be submitted before the 24-hour deadline. Late submissions will not be accepted.",
      },
      {
        id: "round_9",
        round_name: "Platforms",
        round_desc: "The game must be playable on at least one of the following platforms: Windows, macOS, Linux, or a web browser.",
      },
      {
        id: "round_10",
        round_name: "Code Submission",
        round_desc: "The full source code must be submitted alongside the game, with clear instructions on how to run the game.",
      },
    ]
  },
];

export default hackathon_data;
