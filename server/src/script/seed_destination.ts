import { Destination } from "../model";

const data = [
  {
    city: "London",
    country: "United Kingdom",
    clues: [
      "This city is home to a clock tower often mistaken as its bell.",
      "A river runs through this historic capital, known for its iconic bridge.",
    ],
    fun_fact: [
      "Big Ben refers to the bell, not the clock tower!",
      "The London Underground is the oldest subway system in the world.",
    ],
    trivia: [
      "London was the first city to host the Olympics three times.",
      "There are more Indian restaurants in London than in Mumbai or Delhi.",
    ],
  },
  {
    city: "Sydney",
    country: "Australia",
    clues: [
      "This city boasts a famous opera house with a unique sail-like design.",
      "You can climb one of the world’s most iconic steel bridges here.",
    ],
    fun_fact: [
      "The Sydney Opera House took 14 years to build—way longer than planned!",
      "Sydney has over 100 beaches along its coastline.",
    ],
    trivia: [
      "The Sydney Harbour Bridge is nicknamed 'The Coathanger' due to its shape.",
      "Sydney is Australia's most populous city.",
    ],
  },
  {
    city: "Cairo",
    country: "Egypt",
    clues: [
      "This city is home to ancient wonders that have stood for over 4,000 years.",
      "The nearby river is the longest in the world.",
    ],
    fun_fact: [
      "The Great Pyramid was the tallest man-made structure for over 3,800 years.",
      "Cairo’s metro was the first of its kind in Africa.",
    ],
    trivia: [
      "The city’s name means 'The Victorious'.",
      "Cairo is the largest city in the Arab world.",
    ],
  },
  {
    city: "Rio de Janeiro",
    country: "Brazil",
    clues: [
      "This city hosts one of the largest carnival festivals in the world.",
      "A giant statue of Christ overlooks the city from a mountain.",
    ],
    fun_fact: [
      "The famous beaches here are Copacabana and Ipanema.",
      "Rio was once the capital of Portugal when the royal family fled Europe.",
    ],
    trivia: [
      "The city’s name means 'River of January'.",
      "The 2016 Olympics were held here.",
    ],
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    clues: [
      "This city is home to the tallest building in the world.",
      "Known for its artificial islands shaped like palm trees.",
    ],
    fun_fact: [
      "Dubai was mostly desert 50 years ago, now it’s a futuristic metropolis.",
      "The city has a police force that uses luxury sports cars.",
    ],
    trivia: [
      "The Burj Khalifa is over half a mile high.",
      "Dubai’s metro is driverless.",
    ],
  },
  {
    city: "Rome",
    country: "Italy",
    clues: [
      "This city is home to an ancient amphitheater where gladiators once fought.",
      "It has a tiny country within its borders.",
    ],
    fun_fact: [
      "The Colosseum could hold 50,000 spectators.",
      "Vatican City, the world’s smallest country, is inside Rome.",
    ],
    trivia: [
      "All roads once led to this city.",
      "Rome is known as the Eternal City.",
    ],
  },
  {
    city: "Cape Town",
    country: "South Africa",
    clues: [
      "This city is famous for a flat-topped mountain.",
      "It’s a gateway to Robben Island, where Nelson Mandela was imprisoned.",
    ],
    fun_fact: [
      "Table Mountain is over 260 million years old.",
      "Cape Town’s Cape Point is part of the Cape Floral Region, a World Heritage Site.",
    ],
    trivia: [
      "Cape Town was the first city in South Africa to host the World Cup.",
      "It’s often called the Mother City.",
    ],
  },
  {
    city: "Bangkok",
    country: "Thailand",
    clues: [
      "This city is known for its ornate temples and vibrant street life.",
      "It has a famous street known for backpackers and night markets.",
    ],
    fun_fact: [
      "The city's full ceremonial name is the longest place name in the world.",
      "Bangkok is sinking—some areas by more than 2 cm per year.",
    ],
    trivia: [
      "The Grand Palace has been the official residence of Thai kings since 1782.",
      "Bangkok welcomes over 22 million tourists a year.",
    ],
  },
  {
    city: "Moscow",
    country: "Russia",
    clues: [
      "This city’s central square is known for its colorful domed cathedral.",
      "It’s home to the Kremlin, the seat of political power.",
    ],
    fun_fact: [
      "Moscow’s metro stations are known as ‘underground palaces’.",
      "The city spans across 2 continents—Europe and Asia.",
    ],
    trivia: [
      "Moscow’s name comes from the Moskva River.",
      "It has the world’s largest number of billionaires per capita.",
    ],
  },
  {
    city: "Seoul",
    country: "South Korea",
    clues: [
      "This city blends ancient palaces with cutting-edge technology.",
      "K-pop and kimchi are part of its global cultural exports.",
    ],
    fun_fact: [
      "The city has over 3 million CCTV cameras for safety.",
      "Seoul’s subway stations have free libraries.",
    ],
    trivia: [
      "Seoul hosted the 1988 Summer Olympics.",
      "The city has the fastest average internet speeds in the world.",
    ],
  },
];

export const seedDatabase = async () => {
  await Destination.deleteMany(); // Clear old data
  await Destination.insertMany(data);

  console.log("Database seeded!");
};
