import { Component, OnInit, Injector } from '@angular/core';
import { GoogleSheetServiceService } from './google-sheet-service.service';

@Component({
  selector: 'app-what-to-eat',
  templateUrl: './what-to-eat.component.html',
  styleUrls: ['./what-to-eat.component.scss'],
  providers: [
    GoogleSheetServiceService
  ]
})
export class WhatToEatComponent implements OnInit {
  protected sheetServ: GoogleSheetServiceService;
  constructor(injector: Injector) {
    this.sheetServ = injector.get(GoogleSheetServiceService);
  }

  ngOnInit(): void {

  }

  start() {
    this.sheetServ.Load().toPromise().then(res => {
      console.log(res);
    });
  }
}
