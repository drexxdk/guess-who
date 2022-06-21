export interface GameState {
  questions: question[];
  answers: answer[];
  current: number;
}

interface question {
  id: number;
  title: string;
  options: option[];
}

type optionType = 'name' | 'photo';
interface option {
  id: number;
  type: optionType;
  title?: string;
  image?: string;
}

interface answer {
  questionindex: number;
  answerIndex?: number;
  isCorrect: boolean;
  correctIndex?: number; // fill after the user has answered
}
