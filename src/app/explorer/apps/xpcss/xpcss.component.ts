import { Component, OnInit } from '@angular/core';
import { AppBase } from '../AppBase';

@Component({
  selector: 'app-xpcss',
  templateUrl: './xpcss.component.html',
  styleUrls: ['./xpcss.component.scss']
})
export class XpcssComponent extends AppBase implements OnInit {
  public static appName = 'XP.css';
  public static icon = 'iexplore-33'; // 'settings';
  public static description = 'XP.css 編譯後的展示頁';
  public static iconSet = 'iexplore';

  constructor() { super(); }

  ngOnInit(): void {
  }

}
