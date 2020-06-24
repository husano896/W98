import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppBase } from '../AppBase';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent extends AppBase implements OnInit, OnDestroy {
  public static appName = 'APPS.CLOCK'; // '時鐘';
  public static icon = 'alarm';
  public static description = 'Tik, Thonk, Tik, Thonk';

  interval: NodeJS.Timeout;
  timeNow = new Date();
  constructor() { super(); }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.timeNow = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
