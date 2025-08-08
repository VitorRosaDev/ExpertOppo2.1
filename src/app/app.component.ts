import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Smartphones', url: '/smartphones', icon: 'phone-portrait' },
    { title: 'Oppo neles!', url: '/oppo-neles', icon: 'trophy' },
    { title: 'Reversão', url: '/reversao', icon: 'sync' },
    { title: 'Boas práticas', url: '/boas-praticas', icon: 'shield-checkmark' },
    { title: 'Suporte', url: '/suporte', icon: 'build' },
    { title: 'Sobre o App', url: '/sobre', icon: 'information-circle' },
  ];

}
