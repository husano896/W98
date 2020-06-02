import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { Observable } from 'rxjs';

import * as config from '@shared/config/google-sheet.json';

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetServiceService {

  constructor(private http: HttpClient) {

  }

  Load(id: string = config.sheet_id): Observable<Array<any>> {
    const url = `https://spreadsheets.google.com/feeds/list/${id}/od6/public/values?alt=json`;

    return this.http.get(url).pipe(
      map((res: any) => {
        const data = res.feed.entry;
        return data;
      }),
      map((dataList: Array<any>) => {
        return _.map(dataList, (data) => {
          const obj = {};
          _.forEach(data, (value, key) => {
            // 有gsx$開頭的才是要提取的參數！
            if (key.includes('gsx$')) {
              obj[key.split('gsx$')[1]] = value.$t;
            }
          });
          return obj;
        });
      })
    );
  }
}
