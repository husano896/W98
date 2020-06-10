import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExplorerService {

  ReloadConfig$: Subject<any> = new Subject();
  constructor() { }

  public ReloadConfig() {
    this.ReloadConfig$.next();
  }
}
