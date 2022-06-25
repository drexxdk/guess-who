import { Game, Status } from '@portal-app/routes/games/state/games.interfaces';

export interface GameState {
  status: Status;
  game?: GameStateGame;
}

export interface GameStateGame extends Game {
  questions: GameStateQuestion[];
  answers: GameStateAnswer[];
}

export interface GameStateQuestion {
  id: number;
  title: string;
  options: GameStateOption[];
}

export interface GameStateOption {
  id: number;
  title?: string;
  image?: string;
}

export interface GameStateAnswer {
  questionindex: number;
  answerIndex?: number;
  isCorrect: boolean;
  correctIndex?: number;
}
