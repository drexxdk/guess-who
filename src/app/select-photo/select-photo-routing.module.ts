import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectPhotoComponent } from './select-photo.component';

const routes: Routes = [
  {
    path: '',
    component: SelectPhotoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectPhotoRoutingModule {}
