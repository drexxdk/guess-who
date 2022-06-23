type GameType = 'select-name' | 'select-photo';
type GameState = 'not-started' | 'started' | 'finished';
type GameDifficulty = 'easy' | 'medium' | 'hard';

export interface GamesState {
  games: Game[];
}

export interface Game {
  id: number;
  type: GameType;
  state: GameState;
  difficulty: GameDifficulty;
  title: string;
  questions: number;
  currentQuestion?: number;
}
