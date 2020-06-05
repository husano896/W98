import { Component, OnInit, Injector } from '@angular/core';
import { GoogleSheetServiceService } from './google-sheet-service.service';
import { AppBase } from '../AppBase';

@Component({
  selector: 'app-what-to-eat',
  templateUrl: './what-to-eat.component.html',
  styleUrls: ['./what-to-eat.component.scss']
  // 這裡不做provider作為singleton
})
export class WhatToEatComponent extends AppBase implements OnInit {
  public static appName = '中午吃蛇';
  public static icon = 'local_dining';

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

  Load() {
    this.sheetServ.Load().toPromise().then(res => {
      this.dataList = res;
    });
  }

  randomSelect() {
    this.selectedIndex = Math.floor(Math.random() * this.dataList.length);
  }
}
