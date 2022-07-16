import { Game } from '@portal-app/routes/games/state/games.interfaces';
import { QuestionStatus, Status } from '@portal-app/types/status.type';

export interface GameState {
  status: Status;
  game?: GameStateGame;
}

export interface GameStateGame extends Game {
  question: GameStateQuestion;
}

export interface GameStateQuestion {
  id: number;
  currentQuestionNumber: number;
  currentQuestionId: number;
  nextQuestionId?: number;
  totalQuestions: number;
  title?: string;
  image?: string;
  options: GameStateOption[];
  status: QuestionStatus;
  selected: boolean;
  answer?: GameStateAnswer;
}

export interface GameStateOption {
  id: number;
  title?: string;
  image?: string;
  selected: boolean;
}

export interface GameStateAnswer {
  selectedOptionId?: number;
  correctOptionId?: number;
  isCorrect: boolean;
}

export interface GameNavigation {
  currentQuestionNumber: number;
  currentQuestionId: number;
  totalQuestions: number;
  nextQuestionId?: number;
  answered: boolean;
}

export interface SelectedQuestionOption {
  questionId: number;
  optionId: number;
}
