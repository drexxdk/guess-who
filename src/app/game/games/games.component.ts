import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GamesState } from './store/games.interfaces';
import * as GamesActions from './store/games.actions';
import * as GamesSelectors from './store/games.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  public games$ = this.gamesStore.select(GamesSelectors.selectGames);

  constructor(private gamesStore: Store<GamesState>, private router: Router) {}

  ngOnInit(): void {
    this.gamesStore.dispatch(GamesActions.fetchGames());
  }

  onClickGame(id: number) {
    this.router.navigateByUrl(`/game/${id}`);
  }
}
