import { Component, OnInit, Injector, Input, AfterViewInit } from '@angular/core';
import { WinWindowComponent } from '..';
import { WinDialogService, IWinDialogAction } from './win-dialog.service';

import * as S from 'src/app/explorer/Sounds';
@Component({
  selector: 'app-win-dialog',
  templateUrl: './win-dialog.component.html',
  styleUrls: ['./win-dialog.component.scss']
})
export class WinDialogComponent extends WinWindowComponent implements OnInit, AfterViewInit {
  @Input() messageType: string;

  @Input() actions: IWinDialogAction[];

  @Input() onClose: () => any;

  @Input() pid: number;
  constructor(injector: Injector, private dialogServ: WinDialogService) {
    super(injector);
  }

  ngOnInit() {
    switch (this.messageType) {
      case 'info':
        S.SndDing.play();
        break;
      case 'warn':
        S.SndChord.play();
        break;
      case 'error':
        S.SndError.play();
        break;
    }
    this.css.left = `${window.innerWidth / 2 - 128}px`;
    this.css.top = `${window.innerHeight / 2  - 128}px`;
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
  // 動作按鈕
  actionClick(action: IWinDialogAction) {
    if (action.callback) {
      action.callback();
    }
    this.btnClose();
  }

  // 關閉按鈕
  btnClose() {
    if (this.closing) { return; }
    this.closing = true;
    this.changeDetectionRef.detectChanges();
    // 按下關閉後就去除所有判定
    this.changeDetectionRef.detach();
    setTimeout(() => {
      this.alive = false;
      this.wMessage.emit({ type: 'close' });

      this.changeDetectionRef.detectChanges();
      this.dialogServ.Close(this.pid);
    }, 500);
  }

  // Dialog類型
  getMessageTypeIcon() {
    switch (this.messageType) {
      case 'info':
        return 'explorer-39';
      case 'warn':
        return 'explorer-48';
      case 'error':
        return 'explorer-51';
    }
  }
  // 動態Class變更
  classCallBack() {
    return {
      animate__zoomIn: this.maximize,
      animate__zoomOut: this.closing,
      active: this.active
    };
  }
}
