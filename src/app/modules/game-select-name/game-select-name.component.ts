import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  GameStateQuestion,
  SelectedQuestionOption,
} from '@portal-app/routes/game/state/game.interfaces';

@Component({
  selector: 'app-game-select-name[question]',
  templateUrl: './game-select-name.component.html',
  styleUrls: ['./game-select-name.component.scss'],
})
export class GameSelectNameComponent {
  @Input() question!: GameStateQuestion;
  @Output() clickEvent = new EventEmitter<SelectedQuestionOption>();
  textShown = true;

  onClick(optionId: number) {
    this.clickEvent.emit({ questionId: this.question.id, optionId: optionId });
  }

  onClickQuestionImage(shown: boolean) {
    this.textShown = shown;
  }
}
