import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignSystemRoutingModule } from './design-system-routing.module';
import { DesignSystemHomePageComponent } from './pages/design-system-home-page/design-system-home-page.component';


@NgModule({
  declarations: [
    DesignSystemHomePageComponent
  ],
  imports: [
    CommonModule,
    DesignSystemRoutingModule
  ]
})
export class DesignSystemModule { }
