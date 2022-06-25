type GameType = 'select-name' | 'select-photo';
type GameDifficulty = 'easy' | 'medium' | 'hard';
export type Status = 'pending' | 'loading' | 'success' | 'error';
type GameStatus = 'not-started' | 'started' | 'finished';

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
