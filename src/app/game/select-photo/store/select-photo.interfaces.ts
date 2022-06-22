import { answer } from '@portal-app/game/game.interfaces';

export interface SelectPhotoState {
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
  image: string;
}
