import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pageTypeEnum } from '@portal-app/enums/page-type.enum';
import { SelectPhotoComponent } from './select-photo.component';

const routes: Routes = [
  {
    path: '',
    component: SelectPhotoComponent,
    data: { pageType: pageTypeEnum.selectPhoto },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectPhotoRoutingModule {}
