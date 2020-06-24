import { Component, OnInit, Injector } from '@angular/core';
import { GoogleSheetServiceService } from './google-sheet-service.service';
import { AppBase } from '../AppBase';
import * as S from '../../Sounds';

@Component({
  selector: 'app-what-to-eat',
  templateUrl: './what-to-eat.component.html',
  styleUrls: ['./what-to-eat.component.scss']
  // 這裡不做provider作為singleton
})
export class WhatToEatComponent extends AppBase implements OnInit {
  public static appName = 'APPS.WHATTOEAT'; // '中午吃蛇';
  public static icon = 'local_dining';
  public static description = '你要ㄘㄇ';
  protected sheetServ: GoogleSheetServiceService;

  dataList: Array<any>;

  selectedIndex: number;
  constructor(injector: Injector) {
    super();
    this.sheetServ = injector.get(GoogleSheetServiceService);
  }

  ngOnInit(): void {
    this.Load();
  }

  Load(f?: boolean) {
    this.sheetServ.Load(f).toPromise().then(res => {
      this.dataList = res;
      console.log(this.dataList);
    });
  }

  refresh() {
    this.dataList = null;
    this.Load(true);
  }

  randomSelect() {
    S.SndTada.currentTime = 0;
    this.selectedIndex = Math.floor(Math.random() * this.dataList.length);
    document.querySelector(`#food${this.selectedIndex}`).scrollIntoView();
    alert(this.dataList[this.selectedIndex].name);
    S.SndTada.play();
  }
}
