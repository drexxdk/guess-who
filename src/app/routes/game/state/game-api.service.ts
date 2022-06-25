import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject, throwError } from 'rxjs';
import { GameStateGame } from './game.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GameApiService {
  constructor() {}

  public fetchGame(id: number): Observable<GameStateGame> {
    console.log('fetchGame');
    if (id !== 1 && id !== 2) {
      return throwError(() => new Error('game not found'));
    }
    const subject = new ReplaySubject<GameStateGame>(1);
    const game: GameStateGame = id === 1 ? this.game1() : this.game2();
    setTimeout(() => {
      subject.next(game);
    }, 1000);
    return subject;
  }

  private game1(): GameStateGame {
    return {
      id: 1,
      type: 'select-name',
      gameStatus: 'not-started',
      difficulty: 'easy',
      title: 'select name game 1',
      questions: [
        {
          id: 1,
          options: [],
          title: 'question 1',
        },
        {
          id: 2,
          options: [],
          title: 'question 2',
        },
        {
          id: 3,
          options: [],
          title: 'question 3',
        },
      ],
      answers: [],
    };
  }

  private game2(): GameStateGame {
    return {
      id: 2,
      type: 'select-photo',
      gameStatus: 'not-started',
      difficulty: 'easy',
      title: 'select photo game 1',
      questions: [
        {
          id: 1,
          options: [
            {
              id: 1,
              image: 'assets/people/1.webp',
            },
            {
              id: 2,
              image: 'assets/people/2.webp',
            },
            {
              id: 3,
              image: 'assets/people/3.webp',
            },
            {
              id: 4,
              image: 'assets/people/4.webp',
            },
          ],
          title: 'question 1',
        },
        {
          id: 2,
          options: [],
          title: 'question 2',
        },
        {
          id: 3,
          options: [],
          title: 'question 3',
        },
      ],
      answers: [],
    };
  }
}
