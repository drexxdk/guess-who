import { Answer } from '@portal-app/game/game.interfaces';

export interface SelectNameState {
  questions: Question[];
  answers: Answer[];
  currentQuestion?: Question;
}

export interface Question {
  id: number;
  title: string;
  options: Option[];
}

export interface Option {
  id: number;
  title: string;
}
