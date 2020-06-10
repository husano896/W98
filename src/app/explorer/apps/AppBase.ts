import { Input, Output, OnInit } from '@angular/core';
import { WinWindowComponent } from '@shared/components';
import { EventEmitter } from '@angular/core';

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
  public description: string = typeof (this);
  AppMessageType = AppMessageType;
  // 丟給Window層的事件
  @Output() appMessage = new EventEmitter<any>();

  ngOnInit() {
    this.appMessage.emit({type: AppMessageType.OPEN});
  }

  exit() {
    this.appMessage.emit({type: AppMessageType.CLOSE});
  }
}
