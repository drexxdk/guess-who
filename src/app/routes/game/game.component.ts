import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GamesState } from '@portal-app/routes/games/state/games.interfaces';
import { take } from 'rxjs';
import * as GameActions from './state/game.actions';
import * as GameSelectors from './state/game.selectors';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  public game$ = this.gameStore.select(GameSelectors.getGame);
  public isLoading$ = this.gameStore.select(GameSelectors.isLoading);

  constructor(
    private gameStore: Store<GamesState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadGame();
  }

  private loadGame() {
    this.route.paramMap.pipe(take(1)).subscribe((params) => {
      const paramId = params.get('id');
      const id = paramId ? parseInt(paramId) : undefined;
      if (id) {
        this.gameStore.dispatch(GameActions.fetchGame({ id: id }));
      } else {
        // redirect to error page
        debugger;
      }
    });
  }
}
