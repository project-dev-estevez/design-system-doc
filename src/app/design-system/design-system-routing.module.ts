import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignSystemLayoutComponent } from '../shared/layouts/design-system-layout/design-system-layout.component';
import { DesignSystemHomePageComponent } from './pages/design-system-home-page/design-system-home-page.component';

const routes: Routes = [
  {
    path: '',
    component: DesignSystemLayoutComponent,
    children: [
      { path: '', component: DesignSystemHomePageComponent },
      // { path: 'managers', loadChildren: () => import('./managers/managers.module').then( m => m.ManagersModule), data: { breadcrumb: 'Managers' } },
      // { path: 'directions', loadChildren: () => import('./directions/directions.module').then(m => m.DirectionsModule), data: { breadcrumb: 'Direcciones' } },
      // { path: 'departments', loadChildren: () => import('./departments/departments.module').then(m => m.DepartmentsModule), data: { breadcrumb: 'Departamentos' } },
      // { path: 'enterprises', loadChildren: () => import('./enterprises/enterprises.module').then(m => m.EnterprisesModule), data: { breadcrumb: 'Empresas' } },
      // { path: 'ceos', loadChildren: () => import('./ceos/ceos.module').then(m => m.CeosModule), data: { breadcrumb: 'CEOs' } },
      // { path: 'areas', loadChildren: () => import('./areas/areas.module').then(m => m.AreasModule), data: { breadcrumb: 'Areas' } },
      // { path: 'empoyees', loadChildren: () => import('./empoyees/empoyees.module').then(m => m.EmpoyeesModule), data: { breadcrumb: 'Puestos' } },
      // { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule), data: { breadcrumb: 'Clientes' } },
      { path: '**', redirectTo: ''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignSystemRoutingModule { }
