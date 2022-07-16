import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  GameStateQuestion,
  SelectedQuestionOption,
} from '@portal-app/routes/game/state/game.interfaces';

@Component({
  selector: 'app-select-name[question]',
  templateUrl: './select-name.component.html',
  styleUrls: ['./select-name.component.scss'],
})
export class SelectNameComponent {
  @Input() question!: GameStateQuestion;
  @Output() clickEvent = new EventEmitter<SelectedQuestionOption>();

  onClick(optionId: number) {
    this.clickEvent.emit({ questionId: this.question.id, optionId: optionId });
  }
}
