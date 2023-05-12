import {
    services1,
    services2,
    services3,
    services4,
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji5,
    com1,
    com2,
    com3,
    com4,
    project1,
    project2,
    project3,
   
  } from "../assets"
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Game Developer",
      icon: services1,
    },
    {
      title: "Game Concept Designer",
      icon: services2,
    },
    {
      title: "Graphic Designer",
      icon: services3,
    },
    {
      title: "Content Creator",
      icon: services4,
    },
  ];
  
  const emoji = [
    {
      name: "3d Emoji1",
      icon: emoji1,
    },
    {
      name: "3d Emoji2",
      icon: emoji2,
    },
    {
      name: "3d Emoji3",
      icon: emoji3,
    },
    {
      name: "3d Emoji4",
      icon: emoji4,
    },
    {
      name: "3d Emoji15",
      icon: emoji5,
    },

  ];
  
  const experiences = [
    {
      title: "Game Designer & Developer",
      company_name: "Codeway",
      icon: com1,
      iconBg: "#c2dad5",
      date: "March 2023 - Present",
      points: [
        "Creating and maintaining engaging game applications using game development frameworks such as Unity or Unreal Engine, along with other related technologies.",
        "Collaborating with cross-functional game development teams, including designers, product managers, and fellow game developers, to develop captivating and high-quality game products.",
        "Implementing responsive game design and ensuring compatibility across multiple gaming platforms and devices.",
        "Actively participating in game code reviews and offering valuable feedback to fellow game developers to ensure the overall quality and performance of the game",
      ],
    },
    {
      title: "Game Developer",
      company_name: "GameStudio",
      icon: com2,
      iconBg: "#d7cbda",
      date: "Jan 2021 - Feb 2023",
      points: [
        "Developing and maintaining captivating game applications using game development frameworks like Unity or Unreal Engine, along with other relevant technologies.",
        "Collaborating with cross-functional game development teams, including designers, product managers, and fellow game developers, to create high-quality game products.",
        "Implementing responsive game design and ensuring compatibility across various gaming platforms and devices.",
        "Actively participating in game code reviews and offering constructive feedback to fellow game developers to enhance the overall quality and performance of the game.",
      ],
    },
    {
      title: "Game Developer",
      company_name: "Panteon",
      icon: com3,
      iconBg: "#e4c0cb",
      date: "Jan 2017 - Jan 2021",
      points: [
        "Creating and maintaining engaging game applications using game development frameworks such as Unity or Unreal Engine, along with other related technologies.",
        "Collaborating with cross-functional game development teams, including designers, product managers, and fellow game developers, to develop captivating and high-quality game products.",
        "Implementing responsive game design and ensuring compatibility across multiple gaming platforms and devices.",
        "Actively participating in game code reviews and offering valuable feedback to fellow game developers to ensure the overall quality and performance of the game",
      ],
    },
    {
      title: "Game Designer",
      company_name: "Das Das",
      icon: com4,
      iconBg: "#dedacf",
      date: "Jan 2015 - May 2017",
      points: [
        "Developing and maintaining captivating game applications using game development frameworks like Unity or Unreal Engine, along with other relevant technologies.",
        "Collaborating with cross-functional game development teams, including designers, product managers, and fellow game developers, to create high-quality game products.",
        "Implementing responsive game design and ensuring compatibility across various gaming platforms and devices.",
        "Actively participating in game code reviews and offering constructive feedback to fellow game developers to enhance the overall quality and performance of the game.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Food Planet",
      description:
        "Show off your food-making prowess by competing against friends and players from around the world. Participate in weekly tournaments, earn high scores, and climb the global leaderboards.",
      tags: [
        {
          name: "Unity",
          color: "purple-text-gradient",
        },
        {
          name: "Javascript",
          color: "gray-text-gradient",
        },
        {
          name: "3D",
          color: "yellow-text-gradient",
        },
      ],
      image: project1,
      source_code_link: "https://github.com/",
    },
    {
      name: "Candy Planet",
      description:
        "Stay engaged and motivated with daily quests and exciting special events. Complete challenges, earn rewards, and unlock exclusive candy ingredients, power-ups, and bonuses.",
      tags: [
        {
          name: "Unity",
          color: "purple-text-gradient",
        },
        {
          name: "Javascript",
          color: "gray-text-gradient",
        },
        {
          name: "3D",
          color: "yellow-text-gradient",
        },
      ],
      image: project2,
      source_code_link: "https://github.com/",
    },
    {
      name: "Sushi Planet",
      description:
        "Enjoy stunning visuals that bring the sushi planets to life. Delight in a vibrant color palette, beautifully designed sushi artwork, and lively animations. Immerse yourself further with a delightful soundtrack that sets the mood for your sushi adventure.",
      tags: [
        {
          name: "Unity",
          color: "purple-text-gradient",
        },
        {
          name: "Javascript",
          color: "gray-text-gradient",
        },
        {
          name: "3D",
          color: "yellow-text-gradient",
        },
      ],
      image: project3,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, emoji, experiences, projects };