import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cartelera', url: '/home/interfas/Inbox', icon: 'today' },
    { title: 'Estrenos', url: '/home/interfas/Outbox', icon: 'film' },
    { title: 'Claro Video', url: '/home/interfas/Favorites', icon: 'heart' },
    { title: 'Descargas', url: '/home/interfas/Archived', icon: 'download' },
    { title: 'Portada', url: '/home/interfas/Trash', icon: 'home' },
    { title: 'Ayuda', url: '/home/interfas/Spam', icon: 'warning' },
    { title: 'Salir', url: '/home/interfas/Spam', icon: 'person-circle' },
  ];
  constructor() {}
}
