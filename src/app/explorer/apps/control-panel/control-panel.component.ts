import { Component, OnInit } from '@angular/core';
import { AppBase } from '../AppBase';
import { ExplorerConfig } from '../../ExplorerConfig';
import { ExplorerService } from '../../explorer.service';
import * as S from '../../Sounds';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})

export class ControlPanelComponent extends AppBase implements OnInit {
  public static appName = 'APPS.CONTROL_PANEL'; // '控制台';
  public static icon = 'shell32-245'; // 'settings';
  public static description = '唐鳳的秘密控制中心';
  public static iconSet = 'shell32';
  modified: boolean;
  config: ExplorerConfig;
  lang: string;
  langs: Array<{ displayName: string, name: string }>;
  constructor(private explorerServ: ExplorerService, private translate: TranslateService) { super(); }

  ngOnInit(): void {
    // 取得Explorer設定
    const cfg = localStorage.getItem(ExplorerConfig.name);
    if (!cfg) {
      this.config = new ExplorerConfig();
      localStorage.setItem(ExplorerConfig.name, JSON.stringify(this.config));
    } else {
      this.config = JSON.parse(cfg);
    }
    console.log(this.translate.currentLang, this.translate.getLangs(), this.langs, this.translate.translations);
    // 取得語言
    this.lang = this.translate.currentLang;
    this.langs = this.translate.getLangs().map(
      l => ({ displayName: this.translate.translations[l]._langName, name: l })
    );

    console.log(this.translate);
  }

  ok() {
    this.apply();
    this.exit();
  }

  cancel() {
    this.exit();
  }

  default() {
    S.SndChord.play();
    if (confirm('是否恢復預設值?')) {
      this.config = new ExplorerConfig();
      this.modified = true;
    }
  }

  apply() {
    this.modified = false;
    localStorage.setItem(ExplorerConfig.name, JSON.stringify(this.config));
    // 多國語言
    this.translate.use(this.lang);
    localStorage.setItem('language', this.lang);

    this.explorerServ.ReloadConfig();
  }

  disableBgImg() {
    this.config.backgroundImage = '';
    this.modified = true;
  }
}
