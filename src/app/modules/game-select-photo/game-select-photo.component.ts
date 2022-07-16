import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  GameStateQuestion,
  SelectedQuestionOption,
} from '@portal-app/routes/game/state/game.interfaces';

@Component({
  selector: 'app-game-select-photo[question]',
  templateUrl: './game-select-photo.component.html',
  styleUrls: ['./game-select-photo.component.scss'],
})
export class GameSelectPhotoComponent {
  @Input() question!: GameStateQuestion;
  @Output() clickEvent = new EventEmitter<SelectedQuestionOption>();

  onClick(optionId: number) {
    this.clickEvent.emit({ questionId: this.question.id, optionId: optionId });
  }
}
