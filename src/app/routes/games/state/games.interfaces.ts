import {
  GameType,
  GameStatus,
  GameDifficulty,
} from '@portal-app/types/game.type';
import { Status } from '@portal-app/types/status.type';

export interface GamesState {
  status: Status;
  games: GamesStateGame[];
}

export interface GamesStateGame extends Game {
  questions: number;
}

export interface Game {
  id: number;
  type: GameType;
  gameStatus: GameStatus;
  difficulty: GameDifficulty;
  title: string;
  progress?: number;
}
