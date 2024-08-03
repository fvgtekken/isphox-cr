


export interface AnswerOption {
  type: string;
  content: string;
  genre: string; // Añadido si no estaba
}

export interface Question {
  question: string;
  answers: AnswerOption[];
  // Añade otras propiedades si las hay
}