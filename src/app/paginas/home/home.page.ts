import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  platform: any;

  constructor() { }


  ngOnInit() {
  }

}
