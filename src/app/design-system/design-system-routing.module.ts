import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignSystemLayoutComponent } from '../shared/layouts/design-system-layout/design-system-layout.component';
import { DsHomePageComponent } from './pages/ds-home-page/ds-home-page.component';
import { DsInstallationPageComponent } from './pages/ds-installation-page/ds-installation-page.component';
import { DsWhatsNewPageComponent } from './pages/ds-whats-new-page/ds-whats-new-page.component';
import { DsOverviewPageComponent } from './pages/ds-overview-page/ds-overview-page.component';
import { DsPrinciplesPageComponent } from './pages/ds-principles-page/ds-principles-page.component';
import { DsColorsPageComponent } from './pages/ds-colors-page/ds-colors-page.component';
import { DsFontsPageComponent } from './pages/ds-fonts-page/ds-fonts-page.component';
import { DsShadowsRadiusPageComponent } from './pages/ds-shadows-radius-page/ds-shadows-radius-page.component';
import { DsIconsPageComponent } from './pages/ds-icons-page/ds-icons-page.component';
import { DsGridLayoutPageComponent } from './pages/ds-grid-layout-page/ds-grid-layout-page.component';

const routes: Routes = [
  {
    path: '',
    component: DesignSystemLayoutComponent,
    children: [
      { path: '', component: DsHomePageComponent },
      { path: 'installation', component: DsInstallationPageComponent },
      { path: 'whats-new', component: DsWhatsNewPageComponent },
      { path: 'overview', component: DsOverviewPageComponent },
      { path: 'principles', component: DsPrinciplesPageComponent },
      { path: 'colors', component: DsColorsPageComponent },
      { path: 'fonts', component: DsFontsPageComponent },
      { path: 'shadows-radius', component: DsShadowsRadiusPageComponent },
      { path: 'icons', component: DsIconsPageComponent },
      { path: 'grid-layouts', component: DsGridLayoutPageComponent },
      { path: 'ui-components', loadChildren: () => import('./ui-components/ui-components.module').then(m => m.UiComponentsModule) },{ path: '**', redirectTo: ''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignSystemRoutingModule { }
