import type { QuizForm } from '../types/data/quizForm';
// Product[]

export const quizForm: QuizForm[] = [
  {
    id: 1,
    type: 'one-choice',
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    next: 2,
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Select the programming languages you know:',
    options: ['JavaScript', 'Python', 'Java', 'C#'],
    next: 3,
  },
  {
    id: 3,
    type: 'input',
    question: 'What is your favorite color?',
    next: null,
  },
];
