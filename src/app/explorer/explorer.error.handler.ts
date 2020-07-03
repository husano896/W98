import { ErrorHandler, Injector, Injectable } from '@angular/core';
import * as S from './Sounds';
import { WinDialogService } from '@shared/components/win-dialog/win-dialog.service';

@Injectable({ providedIn: 'root' })
export class ExplorerErrorHandler implements ErrorHandler {
  dialogServ: WinDialogService;
  constructor(injector: Injector) {
    this.dialogServ = injector.get(WinDialogService);
  }
  handleError(error) {
    S.SndError.play();
    this.dialogServ.Show('Runtime error', error);
    // tslint:disable-next-line: no-console
    console.trace();
  }
}
