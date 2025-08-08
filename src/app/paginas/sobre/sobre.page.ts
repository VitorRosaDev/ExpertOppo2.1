import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
  standalone: false,
})
export class SobrePage implements OnInit {

  constructor(private platform: Platform) { }

  ngOnInit() {
  }

  openExternalLink() {
    const url = 'https://vitorrosadev.github.io/';

    this.platform.ready().then(() => {
      if (Capacitor.getPlatform() === 'capacitor') {
        Browser.open({ url: url });
      } else {
        window.open(url, '_blank');
      }
    });
  }
}
