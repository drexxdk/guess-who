import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GamesState } from './state/games.interfaces';
import * as GamesActions from './state/games.actions';
import * as GamesSelectors from './state/games.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  public games$ = this.gamesStore.select(GamesSelectors.selectGames);
  public isLoading$ = this.gamesStore.select(GamesSelectors.isLoading);

  constructor(private gamesStore: Store<GamesState>, private router: Router) {}

  ngOnInit(): void {
    this.gamesStore.dispatch(GamesActions.fetchGames());
  }

  onClickGame(id: number) {
    this.router.navigateByUrl(`/game/${id}`);
  }
}
