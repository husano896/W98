import { Input, Output, OnInit } from '@angular/core';
import { WinWindowComponent } from '@shared/components';
import { EventEmitter } from 'protractor';

enum AppMessageType {
  OPEN = 'open',
  CLOSE = 'close'
}

interface IAppMessage {
  type: AppMessageType;
}
export class AppBase implements OnInit {
  public appName: string = typeof (this);
  public icon?: string;
  public img?: string;
  AppMessageType = AppMessageType;
  @Output() appMessage = new EventEmitter();

  ngOnInit() {
    this.appMessage.emit(AppMessageType.OPEN);
  }

  exit() {
    this.appMessage.emit(AppMessageType.CLOSE);
  }
}
