import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About Us",
    url: "#about-us",
  },
  {
    id: "1",
    title: "Features",
    url: "#features",
  },
  {
    id: "2",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "3",
    title: "Team",
    url: "#how-to-use",
  },
  {
    id: "4",
    title: "conatct us ",
    url: "#roadmap",
  },
  {
    id: "5",
    itle: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "6",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Voice recognition",
  "Gamification",
  "Chatbot customization",
  "Integration with APIs",
];


export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];


export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

  export const collabContent = [
  
    {
      id: "0",
      title: "Seamless Integration",
      text: collabText,
    },
    {
      id: "1",
      title: "Smart Automation",
    },
    {
      id: "2",
      title: "Sustainability and Intelligence",
    },
    {
      id: "3",
      title: "Durable Rover Solutions",
    },
    {
      id: "4",
      title: "Advanced Exploration Technology",
    },
    {
      id: "5",
      title: "Top-notch Security",
    }
  
  
  ];
  
  export const collabApps = [
  
    {
      id: "1",
      title: "Notion",
      icon: notion,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "Discord",
      icon: discord,
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "Slack",
      icon: slack,
      width: 34,
      height: 35,
    },
  
    {
      id: "7",
      title: "Raindrop",
      icon: raindrop,
      width: 38,
      height: 32,
    },
  ];

  export const pricing = [
    {
      id: "0",
      title: "Basic",
      description: "Entry-level access to AI-driven mobility and exploration tools",
      price: "10,000",
      features: [
        "Basic drone design and prototyping tools",
        "Limited access to autonomous vehicle development insights",
        "Essential exploration and mapping functionalities",
      ],
    },
    {
      id: "1",
      title: "Premium",
      description: "Advanced AI-driven solutions for mobility and mapping",
      price: "40,000",
      features: [
        "Advanced autonomous vehicle development capabilities",
        "Enhanced rover engineering solutions for mapping",
        "Smart mobility solutions for efficiency and safety",
      ],
    },
    {
      id: "2",
      title: "Enterprise",
      description: "Comprehensive AI-powered mobility and exploration solutions",
      price: null,
      features: [
        "Custom drone prototyping and autonomous vehicle integration",
        "Next-generation exploration and mapping technology",
        "Dedicated support for scalable, intelligent mobility solutions",
      ],
    },
  ];

export const benefits = [
  {
    id: "0",
    title: "Drone Design and Prototyping",
    text: "Drone design and prototyping enables customized, cost-effective, and innovative solutions for diverse applications, enhancing efficiency and scalability.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Autonomous Vehicle Development",
    text: " Autonomous vehicle development enhances mobility with improved efficiency, safety, and intelligent, self-operating capabilities.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Rover Engineering Solutions for Exploration and Mapping",
    text: "Rover engineering provides reliable, durable solutions for exploration and mapping in challenging environments.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Next-Generation Mobility Solutions for Exploration",
    text: "Futuristic mobility solutions deliver advanced, durable, and adaptable vehicles for seamless exploration and mapping in diverse environments.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: " Advanced Exploration and Mapping Technology",
    text: "Exploration technology enables precise mapping, enhanced data collection, and efficient navigation in harsh and inaccessible environments.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Smart Solutions for Mobility",
    text: "It improve efficiency, reduce congestion, enhance safety, and optimize transportation systems for a sustainable future.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
