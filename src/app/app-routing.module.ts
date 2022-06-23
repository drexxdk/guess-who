import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@portal-app/game/games/games.module').then(
        (module) => module.GamesModule
      ),
  },
  {
    path: 'name',
    loadChildren: () =>
      import('@portal-app/game/select-name/select-name.module').then(
        (module) => module.SelectNameModule
      ),
  },
  {
    path: 'photo',
    loadChildren: () =>
      import('@portal-app/game/select-photo/select-photo.module').then(
        (module) => module.SelectPhotoModule
      ),
  },
  {
    path: 'game/:id',
    loadChildren: () =>
      import('@portal-app/game/game/game.module').then(
        (module) => module.GameModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
