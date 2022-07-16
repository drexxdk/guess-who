import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  GameStateQuestion,
  SelectedQuestionOption,
} from '@portal-app/routes/game/state/game.interfaces';

interface photo {
  id: number;
  url: string;
}

@Component({
  selector: 'app-select-photo[question]',
  templateUrl: './select-photo.component.html',
  styleUrls: ['./select-photo.component.scss'],
})
export class SelectPhotoComponent {
  @Input() question!: GameStateQuestion;
  @Output() clickEvent = new EventEmitter<SelectedQuestionOption>();

  onClick(optionId: number) {
    this.clickEvent.emit({ questionId: this.question.id, optionId: optionId });
  }
}
