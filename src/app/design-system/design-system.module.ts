import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignSystemRoutingModule } from './design-system-routing.module';
import { DsHomePageComponent } from './pages/ds-home-page/ds-home-page.component';
import { DsInstallationPageComponent } from './pages/ds-installation-page/ds-installation-page.component';
import { DsWhatsNewPageComponent } from './pages/ds-whats-new-page/ds-whats-new-page.component';
import { DsOverviewPageComponent } from './pages/ds-overview-page/ds-overview-page.component';
import { DsPrinciplesPageComponent } from './pages/ds-principles-page/ds-principles-page.component';
import { DsColorsPageComponent } from './pages/ds-colors-page/ds-colors-page.component';
import { DsFontsPageComponent } from './pages/ds-fonts-page/ds-fonts-page.component';
import { DsShadowsRadiusPageComponent } from './pages/ds-shadows-radius-page/ds-shadows-radius-page.component';
import { DsGridLayoutPageComponent } from './pages/ds-grid-layout-page/ds-grid-layout-page.component';
import { DsIconsPageComponent } from './pages/ds-icons-page/ds-icons-page.component';


@NgModule({
  declarations: [
    DsHomePageComponent,
    DsInstallationPageComponent,
    DsWhatsNewPageComponent,
    DsOverviewPageComponent,
    DsPrinciplesPageComponent,
    DsColorsPageComponent,
    DsFontsPageComponent,
    DsShadowsRadiusPageComponent,
    DsGridLayoutPageComponent,
    DsIconsPageComponent
  ],
  imports: [
    CommonModule,
    DesignSystemRoutingModule
  ]
})
export class DesignSystemModule { }
