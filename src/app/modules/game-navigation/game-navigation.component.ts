import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameState } from '@portal-app/routes/game/state/game.interfaces';
import * as GameSelectors from '../../routes/game/state/game.selectors';
import * as GameActions from '../../routes/game/state/game.actions';

@Component({
  selector: 'app-game-navigation',
  templateUrl: './game-navigation.component.html',
  styleUrls: ['./game-navigation.component.scss'],
})
export class GameNavigationComponent implements OnInit {
  public navigation$ = this.gameStore.select(GameSelectors.getNavigation);
  public status$ = this.gameStore.select(GameSelectors.getStatus);

  constructor(private gameStore: Store<GameState>) {}

  ngOnInit(): void {
    this.navigation$.subscribe((data) => {
      console.log('navigation', data);
    });
  }

  onClickNextQuestion(questionId: number): void {
    this.gameStore.dispatch(
      GameActions.fetchQuestion({ questionId: questionId })
    );
  }
}
