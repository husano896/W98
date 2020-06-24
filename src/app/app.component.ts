import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import * as S from './explorer/Sounds';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';
const langs = [
  'en',
  'zh-tw'
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private Sounds = S;
  constructor(private matIconRegistry: MatIconRegistry, translate: TranslateService) {
    // 註冊圖示
    const icons = [
      'shell32',
      'explorer',
      'iexplore'
    ];
    for (const i of icons) {
      this.matIconRegistry.registerFontClassAlias(i, i);
    }

    // 多語系註冊
    translate.setDefaultLang('en');
    translate.addLangs(langs);
    // 從LocalStorage取目前語言，否則從瀏覽器取
    const lang = localStorage.getItem('language') || navigator.language.toLocaleLowerCase();
    localStorage.setItem('language', lang);
    // 讀其他語言
    forkJoin(langs.map(l => translate.getTranslation(l))).subscribe(() => {

    });
    translate.use(lang);
  }

}
