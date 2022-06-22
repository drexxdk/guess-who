import { answer } from '@portal-app/game/game.interfaces';

export interface SelectNameState {
  questions: question[];
  answers: answer[];
  current: number;
}

interface question {
  id: number;
  title: string;
  options: option[];
}

interface option {
  id: number;
  title: string;
}
