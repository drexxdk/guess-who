import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@portal-app/home/home.module').then(
        (module) => module.HomeModule
      ),
  },
  {
    path: 'name',
    loadChildren: () =>
      import('@portal-app/select-name/select-name.module').then(
        (module) => module.SelectNameModule
      ),
  },
  {
    path: 'photo',
    loadChildren: () =>
      import('@portal-app/select-photo/select-photo.module').then(
        (module) => module.SelectPhotoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
