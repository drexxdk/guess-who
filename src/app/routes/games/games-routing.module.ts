import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pageTypeEnum } from '@portal-app/enums/page-type.enum';
import { GamesComponent } from './games.component';

const routes: Routes = [
  {
    path: '',
    component: GamesComponent,
    data: { pageType: pageTypeEnum.games },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
