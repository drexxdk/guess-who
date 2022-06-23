import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Game } from './games.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GamesApiService {
  constructor() {}

  public fetchGames(): Observable<Game[]> {
    let games: Game[] = [
      {
        id: 1,
        type: 'select-name',
        state: 'not-started',
        difficulty: 'easy',
        title: 'select name game 1',
        questions: 30,
      },
      {
        id: 2,
        type: 'select-name',
        state: 'not-started',
        difficulty: 'easy',
        title: 'select name game 2',
        questions: 30,
      },
    ];
    return of(games);
  }
}
