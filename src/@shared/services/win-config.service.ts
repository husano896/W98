import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })

// 設定檔管理Service
// 初次設定的加載也會在這邊

export class WinConfigService {

  config: any;
  statistics: any;
  localStorage = window.localStorage;
  constructor(private http: HttpClient) {
    // 從目前LocalStorage載入設定
    this.config = this.localStorage.getItem('Win');
  }

  public LoadDefaultConfig(): Observable<any> {
    return this.http.get('/assets/defaultConfig.json').pipe(
      tap(result => {
        this.config = result;
      })
    );
  }
  public Get(key: string) {
    return this.localStorage.getItem(key);
  }

  public Set(key: string, value?: any) {
    return this.localStorage.setItem(key, value);
  }
}
