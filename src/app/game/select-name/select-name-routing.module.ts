import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pageTypeEnum } from '@portal-app/page-type.enum';
import { SelectNameComponent } from './select-name.component';

const routes: Routes = [
  {
    path: '',
    component: SelectNameComponent,
    data: { pageType: pageTypeEnum.selectName },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectNameRoutingModule {}
