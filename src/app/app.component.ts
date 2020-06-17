import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import * as S from './explorer/Sounds';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private matIconRegistry: MatIconRegistry) {
    // 註冊圖示
    const icons = [
      'shell32',
      'explorer',
      'iexplore'
    ];
    for (const i of icons) {
      this.matIconRegistry.registerFontClassAlias(i, i);
    }
  }

}
