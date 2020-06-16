import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppBase } from '../AppBase';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComputerComponent extends AppBase implements OnInit {
  public static appName = '我的電腦';
  public static icon = 'explorer-67';
  public static description = '砸他';
  public static iconSet = 'explorer';
  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
