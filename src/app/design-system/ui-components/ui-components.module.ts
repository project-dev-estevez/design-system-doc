import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiComponentsRoutingModule } from './ui-components-routing.module';
import { DsButtonsComponent } from './pages/ds-buttons/ds-buttons.component';
import { DsCheckboxComponent } from './pages/ds-checkbox/ds-checkbox.component';
import { DsRadiosComponent } from './pages/ds-radios/ds-radios.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    DsButtonsComponent,
    DsCheckboxComponent,
    DsRadiosComponent
  ],
  imports: [
    CommonModule,
    UiComponentsRoutingModule,
    SharedModule
  ]
})
export class UiComponentsModule { }
