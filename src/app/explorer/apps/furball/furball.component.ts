import { Component, OnInit } from '@angular/core';
import { AppBase } from '../AppBase';

@Component({
  selector: 'app-furball',
  templateUrl: './furball.component.html',
  styleUrls: ['./furball.component.scss']
})
export class FurballComponent extends AppBase implements OnInit {
  public static appName = 'FurBalls';
  public static icon = 'iexplore-33'; // 'settings';
  public static description = '毛球毛球毛球毛球';
  public static iconSet = 'iexplore';

  toggleDrug: boolean;
  animSpeed = 5;
  constructor() { super(); }

  ngOnInit(): void {
  }

  getStyle() {
    if (!this.toggleDrug) {
      return;
    }
    return ({
      animation: `rainbow-bg ${this.animSpeed}s linear`
    });
  }
}
