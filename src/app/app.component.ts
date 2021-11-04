import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cartelera', url: '/home/interfas/Inbox', icon: 'mail' },
    { title: 'Estrenos', url: '/home/interfas/Outbox', icon: 'paper-plane' },
    { title: 'Claro Video', url: '/home/interfas/Favorites', icon: 'heart' },
    { title: 'Descargas', url: '/home/interfas/Archived', icon: 'archive' },
    { title: 'Portadas', url: '/home/interfas/Trash', icon: 'trash' },
    { title: 'Ayuda', url: '/home/interfas/Spam', icon: 'warning' },
    { title: 'Salir', url: '/home/interfas/Spam', icon: 'warning' },
  ];
  constructor() {}
}
