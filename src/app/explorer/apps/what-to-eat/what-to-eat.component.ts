import { Component, OnInit, Injector } from '@angular/core';
import { GoogleSheetServiceService } from './google-sheet-service.service';

@Component({
  selector: 'app-what-to-eat',
  templateUrl: './what-to-eat.component.html',
  styleUrls: ['./what-to-eat.component.scss']
  // 這裡不做provider作為singleton
})
export class WhatToEatComponent implements OnInit {
  protected sheetServ: GoogleSheetServiceService;

  dataList: Array<any>;

  selectedIndex: number;
  constructor(injector: Injector) {
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
