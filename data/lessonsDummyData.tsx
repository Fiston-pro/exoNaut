export const lessonsDummyData = [
  {
    id: 1,
    name: "Let's Get Started!",
    lessons: [
      {
        id: 1,
        name: "Introduction",
        description: "You are going to explore the universe!",
        video: "",
        question: "Are you ready?",
        answer: [
          { id: 1, text: "Yes!", isCorrect: true },
          { id: 2, text: "Of course!", isCorrect: true }
        ],
      },
      {
        id: 2,
        name: "Where in space do we live?",
        description: "We live on the planet Earth, which orbits the sun. It’s a part of the Solar System, which consists of 8 planets.",
        video: "",
        question: "How many planets are in the Solar System?",
        answer: [
          { id: 1, text: "only one", isCorrect: false },
          { id: 2, text: "three", isCorrect: false },
          { id: 3, text: "eight", isCorrect: true },
          { id: 4, text: "fifty", isCorrect: false }
        ],
      },
      {
        id: 3,
        name: "Kinds of planets in our solar system",
        description: "There are four terrestrial planets, in order: Mercury, Venus, our Earth, and Mars. These are rocky and solid. \nThen, there are four gas giants - Jupiter, Saturn, Neptune, and Uranus. They are made entirely of gas!",
        video: "",
        question: "Are terrestrial planets solid?",
        answer: [
          { id: 1, text: "Yes!", isCorrect: true },
          { id: 2, text: "No!", isCorrect: false }
        ],
      },
      {
        id: 4,
        name: "What are the exoplanets?",
        description: "They are wonderful, science-fiction-like planets which are outside of our solar system.",
        video: "",
        question: "Where are exoplanets?",
        answer: [
          { id: 1, text: "in our Solar System", isCorrect: false },
          { id: 2, text: "outside of our Solar System", isCorrect: true }
        ],
      },
      {
        id: 5,
        name: "How far are they?",
        description: "They are very far - it would take us 4 light-years to get to the nearest one, in other words about 40,000 years!",
        video: "",
        question: "How many light-years away is the nearest exoplanet?",
        answer: [
          { id: 1, text: "0", isCorrect: false },
          { id: 2, text: "100", isCorrect: false },
          { id: 3, text: "we don't know", isCorrect: false },
          { id: 4, text: "4", isCorrect: true }
        ],
      },
      {
        id: 6,
        name: "Where are they?",
        description: "Sometimes exoplanets orbit a star just like we orbit the Sun;\n sometimes they orbit multiple stars, and sometimes - they just float alone through space, not orbiting anything!",
        video: "",
        question: "Can exoplanets float alone?",
        answer: [
          { id: 1, text: "Yes!", isCorrect: true },
          { id: 2, text: "No!", isCorrect: false }
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Kinds of Exoplanets",
    lessons: [
      {
        id: 7,
        name: "Terrestrial",
        description: "Terrestrial exoplanets are solid and rocky, similar to Venus or Mars.\n They are smaller than Earth, made mostly of rock and metal.\n They can have oceans and atmosphere - so it is possible that humans could live on some of them!",
        video: "",
        question: "How big are terrestrial planets compared to Earth?",
        answer: [
          { id: 1, text: "bigger", isCorrect: false },
          { id: 2, text: "smaller", isCorrect: true },
          { id: 3, text: "the same", isCorrect: false }
        ],
      },
      {
        id: 8,
        name: "Super-Earth",
        description: "Super-earths are like the terrestrial planets, but they are bigger than Earth and smaller than Neptune.",
        video: "",
        question: "Are terrestrial exoplanets bigger than Neptune?",
        answer: [
          { id: 1, text: "Yes, of course!", isCorrect: false },
          { id: 2, text: "Absolutely not!", isCorrect: true }
        ],
      },
      {
        id: 9,
        name: "Neptunian",
        description: "Neptunian are similar to Neptune or Uranus and they are mostly made of hydrogen or helium.\n There are also mini-Neptunes, which are smaller than Neptune and bigger than Earth.",
        video: "",
        question: "What can neptunians be made of?",
        answer: [
          { id: 1, text: "Hydrogen", isCorrect: true },
          { id: 2, text: "Helium", isCorrect: true },
          { id: 3, text: "Both!", isCorrect: false }
        ],
      },
      {
        id: 10,
        name: "Gas Giants",
        description: "Gas giants are the size of Saturn and Jupiter or much larger. \nSome of them are called 'hot Jupiters' because their orbit is really close to their star.",
        video: "",
        question: "Why are some gas giants called 'hot Jupiters'?",
        answer: [
          { id: 1, text: "Because they’re spicy", isCorrect: false },
          { id: 2, text: "Because they’re close to their star", isCorrect: true },
          { id: 3, text: "Because the name sounds nice", isCorrect: false }
        ],
      },
    ],
  },
  {
    id: 3,
    name: "In Search for Exoplanets and Their Life",
    lessons: [
      {
        id: 11,
        name: "Why do we discover exoplanets?",
        description: "We discover and study exoplanets in order to discover if there is life beyond Earth - some aliens, possibly? \nScientists want to figure out what conditions make life develop.",
        video: "",
        question: "Why do we look for exoplanets?",
        answer: [
          { id: 1, text: "Because we search for possible life", isCorrect: true },
          { id: 2, text: "Because we have nothing better to do", isCorrect: false },
          { id: 3, text: "Because we’re bored", isCorrect: false }
        ],
      },
      {
        id: 12,
        name: "Habitable Zone",
        description: "Habitable zone is a zone where the conditions to live may be just right.\n In order for people to survive on a planet in habitable zone it has to be just far enough from the star so that liquid water can exist.\n Liquid water is the most important thing to sustain life.",
        video: "",
        question: "What is the most important thing to sustain life?",
        answer: [
          { id: 1, text: "water", isCorrect: true },
          { id: 2, text: "helium", isCorrect: false },
          { id: 3, text: "gas", isCorrect: false }
        ],
      },
      {
        id: 13,
        name: "What can we observe?",
        description: "We are able to determine an exoplanet’s size, mass, and how far away they are from their star. \nWe can also determine if they are hot or cool, or what kind of exoplanets they are.",
        video: "",
        question: "Are we able to determine how far away exoplanets are from their stars?",
        answer: [
          { id: 1, text: "Yes, we are!", isCorrect: true },
          { id: 2, text: "No, we aren’t…", isCorrect: false },
          { id: 3, text: "Not yet.", isCorrect: false }
        ],
      },
      {
        id: 14,
        name: "How can we see them?",
        description: "We can detect exoplanets thanks to very advanced telescopes like The Hubble Space Telescope!\n When a planet passes in front of a star, it blocks some light, making the star look dimmer.\n Hubble can see this change and learn about the planet's atmosphere, too!",
        video: "",
        question: "What is the name of the telescope that helps scientists study stars, galaxies, and other celestial objects?",
        answer: [
          { id: 1, text: "The Great Telescope", isCorrect: false },
          { id: 2, text: "The Space Telescope", isCorrect: false },
          { id: 3, text: "The Hubble Space Telescope", isCorrect: true }
        ],
      },
    ],
  },
  {
    id: 4,
    name: "The Closest Exoplanets",
    lessons: [
      {
        id: 15,
        name: "Proxima Centauri b",
        description: "It is the closest exoplanet to us. It’s still about 4.24 light-years away, which means it’s really, really far!\n This planet is special because it’s in a zone where it could have liquid water, like Earth, which might mean it could support life. It’s bigger than Earth, so scientists call it a 'super-Earth.'",
        video: "",
        question: "Could this planet be able to support life?",
        answer: [
          { id: 1, text: "Yes, because it could have liquid water.", isCorrect: true },
          { id: 2, text: "No, because it’s a 'super-Earth'.", isCorrect: false }
        ],
      },
      {
        id: 16,
        name: "Barnard's Star b",
        description: "Barnard's Star b is about 6 light-years away from Earth, making it one of the closest exoplanets we know about.\n This planet is a bit bigger than Earth and is called a 'super-Earth.' Scientists think it might be very cold and rocky, and they study it to learn more about planets outside our solar system!",
        video: "",
        question: "What is the temperature like on this planet?",
        answer: [
          { id: 1, text: "Hot", isCorrect: false },
          { id: 2, text: "Cold", isCorrect: true }
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Crazy Exoplanets",
    lessons: [
      {
        id: 17,
        name: "55 Cancri e",
        description: "This planet might be made of diamonds! \nIt’s so rich in carbon, scientists think its surface could be sparkling with diamond-like rocks.",
        video: "",
        question: "What gemstone is this exoplanet made from?",
        answer: [
          { id: 1, text: "Ruby", isCorrect: false },
          { id: 2, text: "Diamond", isCorrect: true },
          { id: 3, text: "Sapphire", isCorrect: false },
          { id: 4, text: "Amethyst", isCorrect: false }
        ],
      },
      {
        id: 19,
        name: "Kepler-16b",
        description: "This planet orbits two stars, just like in Star Wars! \nIf you stood on it, you’d see two sunsets every day. How cool is that?",
        video: "",
        question: "How many stars does Kepler-16b orbit?",
        answer: [
          { id: 1, text: "one", isCorrect: false },
          { id: 2, text: "two", isCorrect: true },
          { id: 3, text: "ten", isCorrect: false }
        ],
      },
    ],
  },
];
