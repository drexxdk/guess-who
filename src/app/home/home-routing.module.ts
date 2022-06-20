import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pageTypeEnum } from '@portal-app/page-type.enum';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { pageType: pageTypeEnum.home },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
