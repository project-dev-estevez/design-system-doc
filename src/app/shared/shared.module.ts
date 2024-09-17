import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { MaterialModule } from './material/material.module';
import { DesignSystemLayoutComponent } from './layouts/design-system-layout/design-system-layout.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DesignSystemLayoutComponent,
    Error404PageComponent
  ],
  imports: [
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialModule,
    DesignSystemLayoutComponent,
    Error404PageComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
