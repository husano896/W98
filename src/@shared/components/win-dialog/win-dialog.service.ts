import { Injectable } from '@angular/core';
import * as _ from 'lodash';

export interface IWinDialog {
  title: string;
  text: string;
  type?: string;
  pid?: number;
  actions?: IWinDialogAction[];
  onClose?: () => any;
}

export interface IWinDialogAction {
  text: string;
  callback?: () => void;
}

@Injectable({
  providedIn: 'root'
})

export class WinDialogService {

  private dialogs: IWinDialog[] = [];

  private dialogId = 0;
  constructor() { }

  Show(title: string, text: string, type?: string, actions?: IWinDialogAction[], onClose?: () => any): IWinDialog {
    const dialog = { title, text, type, pid: this.dialogId, actions, onClose };
    this.dialogId += 1;
    this.dialogs.push(dialog);
    console.log(this.dialogs);
    return dialog;
  }

  Close(pid: number) {;
    const dialog = _.find(this.dialogs, t => t.pid === pid);
    if (!dialog) { return; }
    if (dialog.onClose) {
      dialog.onClose();
    }
    _.remove(this.dialogs, dialog);
  }

  get Dialogs() {
    return this.dialogs;
  }
}
