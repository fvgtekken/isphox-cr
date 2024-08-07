export const defaultGenre: string = 'initial';

export interface HtmlDirective {
  type: 'checkbox' | 'radio' | 'text';
  name: string;
  className: string;
  disabled: boolean;
  placeholder?: string;
  checked?: boolean;
}

// Define el tipo para htmlDirectiveLabel
export interface HtmlDirectiveLabel {
  className: string;
  label: string;
}

// Define el tipo para las respuestas
export interface Answer {
  type: string;
  content: string;
  genre: string;
  typeField: 'input' | 'none' | 'inputText';
  htmlDirective: HtmlDirective;
  htmlDirectiveLabel: HtmlDirectiveLabel;
}

// Define el tipo para las preguntas
export interface QuizQuestion {
  title: string;
  description: string;
  question: string;
  genre: string;
  answers: Answer[];
  backgroundImageUrl: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    title: 'Game Genre',
    description: 'This question aims to understand your gaming preferences by identifying the genres you enjoy the most. Your response will help tailor future questions to match your interests.',
    question: 'What genre of games do you prefer?',
    backgroundImageUrl: '/questions.jpg',
    genre: 'initial', // Indica que es la pregunta inicial para seleccionar el género
    answers: [
      {
        type: 'general',
        content: 'General',
        genre: 'general',
        typeField: 'input',
        htmlDirective: { type: 'checkbox', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'first-person-shooter',
        content: 'First-Person Shooter',
        genre: 'first-person-shooter',
        typeField: 'input',
        htmlDirective: { type: 'checkbox', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'role-playing',
        content: 'Role-Playing',
        genre: 'role-playing',
        typeField: 'input',
        htmlDirective: { type: 'checkbox', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'action-adventure',
        content: 'Action-Adventure',
        genre: 'action-adventure',
        typeField: 'input',
        htmlDirective: { type: 'checkbox', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'racing',
        content: 'Racing',
        genre: 'racing',
        typeField: 'input',
        htmlDirective: { type: 'checkbox', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'platformer',
        content: 'Platformer',
        genre: 'platformer',
        typeField: 'input',
        htmlDirective: { type: 'checkbox', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
    ],
  },
  {
    title: 'Game Franchise',
    description: 'This question seeks to determine your favorite gaming franchises. Your answer will help customize future questions to align with the franchises you prefer.',
    backgroundImageUrl: '/best-game2.jpg',
    question: 'What franchise would you rather play a game from?',
    genre: 'general',
    answers: [
      {
        type: 'Microsoft',
        content: 'Halo',
        genre: 'first-person-shooter',
        typeField: 'input',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Nintendo',
        content: 'Pokemon',
        genre: 'role-playing',
        typeField: 'input',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sony',
        content: 'Uncharted',
        genre: 'action-adventure',
        typeField: 'input',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sega',
        content: 'Yakuza 0',
        genre: 'action-adventure',
        typeField: 'input',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
    ],
  },
  {
    title: 'Choosing Console',
    description: 'This question aims to find out which gaming console you prefer for playing with friends. Your response will help tailor future questions to suit your console preference',
    backgroundImageUrl: '/friend-console.jpg',
    question: 'Which Console would you prefer to play with friends?',
    genre: 'console',
    answers: [
      // Nintendo Consoles
      {
        type: 'Nintendo',
        content: 'Nintendo 64',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Nintendo',
        content: 'GameCube',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Nintendo',
        content: 'Wii',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Nintendo',
        content: 'Wii U',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Nintendo',
        content: 'Switch',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },

      // Sony Consoles
      {
        type: 'Sony',
        content: 'Playstation 1',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sony',
        content: 'Playstation 2',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sony',
        content: 'Playstation 3',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sony',
        content: 'Playstation 4',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sony',
        content: 'Playstation 5',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },

      // Microsoft Consoles
      {
        type: 'Microsoft',
        content: 'Xbox',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Microsoft',
        content: 'Xbox 360',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Microsoft',
        content: 'Xbox One',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Microsoft',
        content: 'Xbox Series S',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Microsoft',
        content: 'Xbox Series X',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },

      // Sega Consoles
      {
        type: 'Sega',
        content: 'Sega Master System',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sega',
        content: 'Sega Genesis',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sega',
        content: 'Sega Saturn',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sega',
        content: 'Sega Dreamcast',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sega',
        content: 'Sega Game Gear',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },

      // Custom Console
      {
        type: 'Custom',
        content: 'your console',
        genre: 'console',
        typeField: 'inputText',
        htmlDirective: { type: 'text', name: 'consoleFriends', placeholder: 'Favorite console', className: 'inputCustom', disabled: false },
        htmlDirectiveLabel: { className: 'inputCustomLabel', label: 'Favorite Console to Play With Friends' },
      },
    ],
  },
  {
    title: 'Racing Franchises',
    description: 'This question seeks to identify your preferred racing game franchise. Your answer will help customize future questions to align with the racing franchises you enjoy the most',
    backgroundImageUrl: '/racing2.jpg',
    question: 'Which of these Racing franchises would you prefer to play a game from?',
    genre: 'racing',
    answers: [
      {
        type: 'Microsoft',
        content: 'Forza',
        genre: 'racing',
        typeField: 'input',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Nintendo',
        content: 'Mario Kart',
        genre: 'racing',
        typeField: 'input',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sony',
        content: 'Gran Turismo',
        genre: 'racing',
        typeField: 'input',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sega',
        content: 'OutRun',
        genre: 'racing',
        typeField: 'input',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
    ],
  },
  {
    title: 'Best Games',
    description: 'This question aims to determine which of the listed games you consider the best. Your response will help tailor future questions to reflect your gaming preferences.',
    backgroundImageUrl: '/best-game2.jpg',
    question: 'Which of these games do you think is best?',
    genre: 'general',
    answers: [
      {
        type: 'Microsoft',
        content: 'BioShock',
        genre: 'first-person-shooter',
        typeField: 'input',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Nintendo',
        content: 'The Legend of Zelda: Ocarina of Time',
        genre: 'action-adventure',
        typeField: 'input',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sony',
        content: 'Final Fantasy VII',
        genre: 'role-playing',
        typeField: 'input',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sega',
        content: 'Shining Force II',
        genre: 'role-playing',
        typeField: 'input',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
    ],
  },
  {
    title: 'Choose Favorite Console',
    description: 'This question seeks to understand your preference for owning a particular gaming console. Your answer will help customize future questions based on your console preference.',
    backgroundImageUrl: '/choose-console2.jpg',
    question: 'What console would you prefer to own?',
    genre: 'console',
    answers: [
      // Nintendo Consoles
      {
        type: 'Nintendo',
        content: 'Nintendo 64',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Nintendo',
        content: 'GameCube',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Nintendo',
        content: 'Wii',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Nintendo',
        content: 'Wii U',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Nintendo',
        content: 'Switch',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },

      // Sony Consoles
      {
        type: 'Sony',
        content: 'Playstation 1',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sony',
        content: 'Playstation 2',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sony',
        content: 'Playstation 3',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sony',
        content: 'Playstation 4',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sony',
        content: 'Playstation 5',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },

      // Microsoft Consoles
      {
        type: 'Microsoft',
        content: 'Xbox',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Microsoft',
        content: 'Xbox 360',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Microsoft',
        content: 'Xbox One',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Microsoft',
        content: 'Xbox Series S',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Microsoft',
        content: 'Xbox Series X',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },

      // Sega Consoles
      {
        type: 'Sega',
        content: 'Sega Master System',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sega',
        content: 'Sega Genesis',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sega',
        content: 'Sega Saturn',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sega',
        content: 'Sega Dreamcast',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sega',
        content: 'Sega Game Gear',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },

      // Custom Console
      {
        type: 'Custom',
        content: 'your console',
        genre: 'console',
        typeField: 'inputText',
        htmlDirective: { type: 'text', name: 'consoleFriends', placeholder: 'Favorite console', className: 'inputCustom', disabled: false },
        htmlDirectiveLabel: { className: 'inputCustomLabel', label: 'Favorite Console to Own' },
      },
    ],
  },
  {
    title: 'FPS Game',
    description: 'This question aims to find out your favorite first-person shooter game. Your response will help tailor future questions to match your gaming preferences.',
    backgroundImageUrl: '/fps2.jpg',
    question: 'Which first-person shooter game do you prefer?',
    genre: 'first-person-shooter',
    answers: [
      {
        type: 'Microsoft',
        content: 'Halo',
        genre: 'first-person shooter',
        typeField: 'input',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sony',
        content: 'Killzone',
        genre: 'first-person shooter',
        typeField: 'input',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Nintendo',
        content: 'Metroid Prime',
        genre: 'first-person shooter',
        typeField: 'input',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sega',
        content: 'Virtua Cop',
        genre: 'first-person shooter',
        typeField: 'input',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
    ],
  },
  {
    title: 'Platformer Game',
    description: 'This question seeks to identify your preferred platformer game. Your answer will help customize future questions to align with your gaming interests.',
    backgroundImageUrl: '/plataformer2.jpg',
    question: 'Which platformer game do you prefer?',
    genre: 'platformer',
    answers: [
      {
        type: 'Microsoft',
        content: 'Ori and the Blind Forest',
        genre: 'platformer',
        typeField: 'input',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Nintendo',
        content: 'Super Mario',
        genre: 'platformer',
        typeField: 'input',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sony',
        content: 'LittleBigPlanet',
        genre: 'platformer',
        typeField: 'input',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sega',
        content: 'Sonic the Hedgehog',
        genre: 'platformer',
        typeField: 'input',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
    ],
  },
  {
    title: 'Role-Playing Game',
    description: 'This question aims to determine your favorite role-playing game. Your response will help tailor future questions to suit your gaming preferences',
    backgroundImageUrl: '/rollgame2.jpg',
    question: 'Which Role-Playing game do you prefer?',
    genre: 'role-playing',
    answers: [
      {
        type: 'Microsoft',
        content: 'The Elder Scrolls V: Skyrim',
        genre: 'role-playing',
        typeField: 'input',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Nintendo',
        content: 'Xenoblade Chronicles',
        genre: 'role-playing',
        typeField: 'input',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sony',
        content: 'Persona 5',
        genre: 'role-playing',
        typeField: 'input',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sega',
        content: 'Phantasy Star IV',
        genre: 'role-playing',
        typeField: 'input',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
    ],
  },
  {
    title: 'Action-Adventure Game',
    description: 'This question seeks to find out your preferred action-adventure game. Your answer will help customize future questions to align with your gaming interests.',
    backgroundImageUrl: '/adventure-game2.jpg',
    question: 'Which Action-Adventure game do you prefer?',
    genre: 'action-adventure',
    answers: [
      {
        type: 'Microsoft',
        content: 'Tomb Raider',
        genre: 'action-adventure',
        typeField: 'input',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Nintendo',
        content: 'The Legend of Zelda: Breath of the Wild',
        genre: 'action-adventure',
        typeField: 'input',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sony',
        content: "Uncharted 4: A Thief's End",
        genre: 'action-adventure',
        typeField: 'input',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sega',
        content: 'Shinobi III: Return of the Ninja Master',
        genre: 'action-adventure',
        typeField: 'input',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
    ],
  },
];

export default quizQuestions;
