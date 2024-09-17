import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  exports: [ MatDividerModule, MatButtonModule ]
})
export class MaterialModule { }
