import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DsButtonsComponent } from './pages/ds-buttons/ds-buttons.component';
import { DsCheckboxComponent } from './pages/ds-checkbox/ds-checkbox.component';
import { DsRadiosComponent } from './pages/ds-radios/ds-radios.component';

const routes: Routes = [
  { path: 'buttons', component: DsButtonsComponent },
  { path: 'checkbox', component: DsCheckboxComponent },
  { path: 'radios', component: DsRadiosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiComponentsRoutingModule { }
