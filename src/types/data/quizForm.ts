export interface QuizForm {
  id: number;
  type: string;
  question: string;
  options: string[];
  next: number;
}
