import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject, throwError } from 'rxjs';
import {
  GameStateAnswer,
  GameStateGame,
  GameStateQuestion,
} from './game.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GameApiService {
  constructor() {}

  public fetchGame(id: number): Observable<GameStateGame> {
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

  public fetchQuestion(questionId: number): Observable<GameStateQuestion> {
    if (!(questionId === 9)) {
      return throwError(() => new Error('Question not found'));
    }
    const subject = new ReplaySubject<GameStateQuestion>(1);
    if (questionId === 9) {
      subject.next(this.question3());
    }

    return subject;
  }

  public submitQuestionAnswer(
    questionId: number,
    optionId: number
  ): Observable<GameStateAnswer> {
    if (!(questionId === 3 || questionId === 4 || questionId === 9)) {
      return throwError(() => new Error('Question not found'));
    }
    const subject = new ReplaySubject<GameStateAnswer>(1);
    let correctOptionId: number = 0;
    if (questionId === 3) {
      correctOptionId = 3;
    }
    if (questionId === 4) {
      correctOptionId = 6;
    }
    if (questionId === 9) {
      correctOptionId = 13;
    }
    subject.next({
      selectedOptionId: optionId,
      correctOptionId: correctOptionId,
      isCorrect: optionId === correctOptionId,
    });
    return subject;
  }

  private game1(): GameStateGame {
    return {
      id: 1,
      type: 'select-name',
      gameStatus: 'not-started',
      difficulty: 'easy',
      title: 'Name game',
      question: this.question1(),
    };
  }

  private game2(): GameStateGame {
    return {
      id: 2,
      type: 'select-photo',
      gameStatus: 'not-started',
      difficulty: 'easy',
      title: 'Picture game',
      question: this.question2(),
    };
  }

  private question1(): GameStateQuestion {
    return {
      id: 3,
      image: 'assets/people/1.webp',
      options: [
        { id: 1, title: 'Simon Jensen', selected: false },
        { id: 2, title: 'Jens Frederiksen', selected: false },
        { id: 3, title: 'Hans Mortensen', selected: false }, //correct
        { id: 4, title: 'Mikkel Hansen', selected: false },
      ],
      title: 'Who is this?',
      currentQuestionNumber: 1,
      currentQuestionId: 3,
      nextQuestionId: undefined,
      totalQuestions: 1,
      status: 'loaded',
      selected: false,
    };
  }

  private question2(): GameStateQuestion {
    return {
      id: 4,
      options: [
        {
          id: 5,
          // image: 'assets/people/1.webp',
          selected: false,
        },
        {
          id: 6,
          image: 'assets/people/2.webp', //correct
          selected: false,
        },
        {
          id: 7,
          image: 'assets/people/3.webp',
          selected: false,
        },
        {
          id: 8,
          image: 'assets/people/4.webp',
          selected: false,
        },
      ],
      title: 'Who is Simon?',
      currentQuestionNumber: 1,
      currentQuestionId: 4,
      nextQuestionId: 9,
      totalQuestions: 2,
      status: 'loaded',
      selected: false,
    };
  }

  private question3(): GameStateQuestion {
    return {
      id: 9,
      options: [
        {
          id: 10,
          image: 'assets/people/5.webp',
          selected: false,
        },
        {
          id: 11,
          image: 'assets/people/6.webp',
          selected: false,
        },
        {
          id: 12,
          image: 'assets/people/7.webp',
          selected: false,
        },
        {
          id: 13,
          image: 'assets/people/8.webp', //correct
          selected: false,
        },
      ],
      title: 'Who is Michelle?',
      currentQuestionNumber: 2,
      currentQuestionId: 9,
      nextQuestionId: undefined,
      totalQuestions: 2,
      status: 'loaded',
      selected: false,
    };
  }
}
