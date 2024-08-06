export const defaultGenre: string = 'initial';

interface HtmlDirective {
  type: 'checkbox' | 'radio' | 'text';
  name: string;
  className: string;
  disabled: boolean;
  placeholder?: string;
}

// Define el tipo para htmlDirectiveLabel
interface HtmlDirectiveLabel {
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
interface QuizQuestion {
  title: string;
  question: string;
  genre: string;
  answers: Answer[];
  backgroundImageUrl: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    title: 'Game Genre',
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
    ],
  },
  {
    title: 'Choosing Console',
    backgroundImageUrl: '/friend-console.jpg',
    question: 'Which Console would you prefer to play with friends?',
    genre: 'console',
    answers: [
      {
        type: 'Microsoft',
        content: 'X-Box',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Nintendo',
        content: 'Nintendo 64',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
      {
        type: 'Sony',
        content: 'Playstation 1',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
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
    backgroundImageUrl: '/racing.jpg',
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
    ],
  },
  {
    title: 'Best Games',
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
    ],
  },
  {
    title: 'Choose Favorite Console',
    backgroundImageUrl: '/choose-console2.jpg',
    question: 'What console would you prefer to own?',
    genre: 'console',
    answers: [
      {
        type: 'Microsoft',
        content: 'X-Box One',
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
        type: 'Sony',
        content: 'Playstation 4',
        genre: 'console',
        typeField: 'none',
        htmlDirective: { type: 'radio', name: 'radioGroup', className: 'radioCustomButton', disabled: false },
        htmlDirectiveLabel: { className: 'radioCustomLabel', label: '' },
      },
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
    ],
  },
  {
    title: 'Platformer Game',
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
    ],
  },
  {
    title: 'Role-Playing Game',
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
    ],
  },
  {
    title: 'Action-Adventure Game',
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
    ],
  },
];

export default quizQuestions;
