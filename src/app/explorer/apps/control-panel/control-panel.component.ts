import { Component, OnInit } from '@angular/core';
import { AppBase } from '../AppBase';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent extends AppBase implements OnInit {
  public static appName = '控制台';
  public static icon = 'settings';
  constructor() { super(); }

  ngOnInit(): void {
  }

  ok() {
    this.apply();
    this.exit();
  }

  cancel() {
    this.exit();
  }
  apply() {

  }
}
