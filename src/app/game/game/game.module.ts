import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { GameRoutingModule } from './games-routing.module';

@NgModule({
  declarations: [GameComponent],
  imports: [CommonModule, GameRoutingModule],
})
export class GameModule {}
