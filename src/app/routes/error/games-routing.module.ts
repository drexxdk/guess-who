import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pageTypeEnum } from '@portal-app/enums/page-type.enum';
import { ErrorComponent } from './error.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorComponent,
    data: { pageType: pageTypeEnum.error },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
