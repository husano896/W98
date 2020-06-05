import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppBase } from '../AppBase';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent extends AppBase implements OnInit {
  public static appName = '關於';
  public static icon = 'help';

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
