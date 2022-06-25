import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { GamesStateGame } from './games.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GamesApiService {
  constructor() {}

  public fetchGames(): Observable<GamesStateGame[]> {
    const subject = new ReplaySubject<GamesStateGame[]>(1);
    const games: GamesStateGame[] = [this.game1(), this.game2()];
    setTimeout(() => {
      subject.next(games);
    }, 1000);
    return subject;
  }

  private game1(): GamesStateGame {
    return {
      id: 1,
      type: 'select-name',
      gameStatus: 'not-started',
      difficulty: 'easy',
      title: 'select name game 1',
      questions: 30,
      progress: 10,
    };
  }

  private game2(): GamesStateGame {
    return {
      id: 2,
      type: 'select-photo',
      gameStatus: 'not-started',
      difficulty: 'easy',
      title: 'select photo game 1',
      questions: 20,
    };
  }
}
