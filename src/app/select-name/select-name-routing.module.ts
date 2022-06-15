import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectNameComponent } from './select-name.component';

const routes: Routes = [
  {
    path: '',
    component: SelectNameComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectNameRoutingModule {}
