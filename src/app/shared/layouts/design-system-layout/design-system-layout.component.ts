import { Component } from '@angular/core';

@Component({
  selector: 'app-design-system-layout',
  templateUrl: './design-system-layout.component.html',
  styleUrl: './design-system-layout.component.scss'
})
export class DesignSystemLayoutComponent {

  menuItems = [
    {
      title: 'Empieza Aquí',
      link: '/',
      borderColor: 'border-blue-500',
      subItems: [
        { title: 'Instalación', link: 'installation' },
        { title: 'Novedades', link: 'whats-new' }
      ]
    },
    {
      title: 'Fundamentos',
      link: '#',
      borderColor: 'border-blue-500',
      subItems: [
        { title: 'Overview', link: 'overview' },
        { title: 'Principios', link: 'principles' },
        { title: 'Colores', link: 'colors' },
        { title: 'Tipografías', link: 'fonts' },
        { title: 'Sombras y Radios', link: 'shadows-radius' },
        { title: 'Iconos', link: 'icons' },
        { title: 'Grid & Layout', link: 'grid-layouts' }
      ]
    },
    {
      title: 'Componentes UI',
      link: '#',
      borderColor: 'border-blue-500',
      subItems: [
        { title: 'Buttons', link: 'ui-components/buttons' }
      ]
    }
  ];

}
