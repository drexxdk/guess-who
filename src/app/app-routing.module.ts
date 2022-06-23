import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@portal-app/routes/games/games.module').then(
        (module) => module.GamesModule
      ),
  },
  {
    path: 'name',
    loadChildren: () =>
      import(
        '@portal-app/routes/game/components/select-name/select-name.module'
      ).then((module) => module.SelectNameModule),
  },
  {
    path: 'photo',
    loadChildren: () =>
      import(
        '@portal-app/routes/game/components/select-photo/select-photo.module'
      ).then((module) => module.SelectPhotoModule),
  },
  {
    path: 'game/:id',
    loadChildren: () =>
      import('@portal-app/routes/game/game.module').then(
        (module) => module.GameModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('@portal-app/routes/error/error.module').then(
        (module) => module.ErrorModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
