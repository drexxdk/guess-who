import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GameState } from '@portal-app/routes/game/state/game.interfaces';
import * as GameSelectors from '../../routes/game/state/game.selectors';
import * as GameActions from '../../routes/game/state/game.actions';

@Component({
  selector: 'app-game-navigation',
  templateUrl: './game-navigation.component.html',
  styleUrls: ['./game-navigation.component.scss'],
})
export class GameNavigationComponent {
  public navigation$ = this.gameStore.select(GameSelectors.getNavigation);
  public status$ = this.gameStore.select(GameSelectors.getStatus);

  constructor(private gameStore: Store<GameState>) {}

  onClickNextQuestion(questionId: number): void {
    this.gameStore.dispatch(
      GameActions.fetchQuestion({ questionId: questionId })
    );
  }
}
