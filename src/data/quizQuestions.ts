export const defaultGenre: string = 'initial';

const quizQuestions = [
  {
    question: 'What genre of games do you prefer?',
    genre: 'initial', // Indica que es la pregunta inicial para seleccionar el género
    answers: [
      {
        type: 'general',
        content: 'General',
        genre: 'general',
      },
      {
        type: 'first-person-shooter',
        content: 'First-Person Shooter',
        genre: 'first-person-shooter',
      },
      {
        type: 'role-playing',
        content: 'Role-Playing',
        genre: 'role-playing',
      },
      {
        type: 'action-adventure',
        content: 'Action-Adventure',
        genre: 'action-adventure',
      },
      {
        type: 'racing',
        content: 'Racing',
        genre: 'racing',
      },
      {
        type: 'platformer',
        content: 'Platformer',
        genre: 'platformer',
      },
    ],
  },
  {
    question: 'What franchise would you rather play a game from?',
    genre: 'general', // Género general para preguntas no específicas de género
    answers: [
      {
        type: 'Microsoft',
        content: 'Halo',
        genre: 'first-person-shooter',
      },
      {
        type: 'Nintendo',
        content: 'Pokemon',
        genre: 'role-playing',
      },
      {
        type: 'Sony',
        content: 'Uncharted',
        genre: 'action-adventure',
      },
    ],
  },
  {
    question: 'Which console would you prefer to play with friends?',
    genre: 'console',
    answers: [
      {
        type: 'Microsoft',
        content: 'X-Box',
        genre: 'general',
      },
      {
        type: 'Nintendo',
        content: 'Nintendo 64',
        genre: 'general',
      },
      {
        type: 'Sony',
        content: 'Playstation 1',
        genre: 'general',
      },
    ],
  },
  {
    question: 'Which of these racing franchises would you prefer to play a game from?',
    genre: 'racing',
    answers: [
      {
        type: 'Microsoft',
        content: 'Forza',
        genre: 'racing',
      },
      {
        type: 'Nintendo',
        content: 'Mario Kart',
        genre: 'racing',
      },
      {
        type: 'Sony',
        content: 'Gran Turismo',
        genre: 'racing',
      },
    ],
  },
  {
    question: 'Which of these games do you think is best?',
    genre: 'general',
    answers: [
      {
        type: 'Microsoft',
        content: 'BioShock',
        genre: 'first-person-shooter',
      },
      {
        type: 'Nintendo',
        content: 'The Legend of Zelda: Ocarina of Time',
        genre: 'action-adventure',
      },
      {
        type: 'Sony',
        content: 'Final Fantasy VII',
        genre: 'role-playing',
      },
    ],
  },
  {
    question: 'What console would you prefer to own?',
    genre: 'console',
    answers: [
      {
        type: 'Microsoft',
        content: 'X-Box One',
        genre: 'console',
      },
      {
        type: 'Nintendo',
        content: 'Wii U',
        genre: 'console',
      },
      {
        type: 'Sony',
        content: 'Playstation 4',
        genre: 'console',
      },
    ],
  },
  {
    question: 'Which first-person shooter game do you prefer?',
    genre: 'first-person-shooter',
    answers: [
      {
        type: 'Microsoft',
        content: 'Halo',
        genre: 'first-person shooter',
      },
      {
        type: 'Sony',
        content: 'Killzone',
        genre: 'first-person shooter',
      },
      {
        type: 'Nintendo',
        content: 'Metroid Prime',
        genre: 'first-person shooter',
      },
    ],
  },
  {
    question: 'Which platformer game do you prefer?',
    genre: 'platformer',
    answers: [
      {
        type: 'Microsoft',
        content: 'Ori and the Blind Forest',
        genre: 'platformer',
      },
      {
        type: 'Nintendo',
        content: 'Super Mario',
        genre: 'platformer',
      },
      {
        type: 'Sony',
        content: 'LittleBigPlanet',
        genre: 'platformer',
      },
    ],
  },
  {
    question: 'Which Role-Playing game do you prefer?',
    genre: 'role-playing',
    answers: [
      {
        type: 'Microsoft',
        content: 'The Elder Scrolls V: Skyrim',
        genre: 'role-playing',
      },
      {
        type: 'Nintendo',
        content: 'Xenoblade Chronicles',
        genre: 'role-playing',
      },
      {
        type: 'Sony',
        content: 'Persona 5',
        genre: 'role-playing',
      },
    ],
  },
  {
    question: 'Which Action-Adventure game do you prefer?',
    genre: 'action-adventure',
    answers: [
      {
        type: 'Microsoft',
        content: 'Tomb Raider',
        genre: 'action-adventure',
      },
      {
        type: 'Nintendo',
        content: 'The Legend of Zelda: Breath of the Wild',
        genre: 'action-adventure',
      },
      {
        type: 'Sony',
        content: "Uncharted 4: A Thief's End",
        genre: 'action-adventure',
      },
    ],
  },
];

export default quizQuestions;
