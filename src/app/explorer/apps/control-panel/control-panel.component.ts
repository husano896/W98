import { Component, OnInit } from '@angular/core';
import { AppBase } from '../AppBase';
import { ExplorerConfig } from '../../ExplorerConfig';
import { ExplorerService } from '../../explorer.service';
import { TranslateService } from '@ngx-translate/core';
import { WinDialogService, IWinDialog } from '@shared/components/win-dialog/win-dialog.service';
import * as _ from 'lodash';

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

  dialog: IWinDialog;
  constructor(
    private explorerServ: ExplorerService,
    private translate: TranslateService,
    private dialogServ: WinDialogService) {
    super();
  }

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

  // 好.jpg
  ok() {
    this.apply();
    this.exit();
  }

  // 不好.gif
  cancel() {
    this.exit();
  }

  default() {
    this.dialog = this.dialogServ.Show('CONFIRM', '是否恢復預設值?', 'warn', [
      {
        text: 'OK', callback: () => {
          // 其他Explorer設定重置
          this.config = new ExplorerConfig();

          // 如果目前語言有支援瀏覽器的語言，選擇瀏覽器語言，否則預設語言
          this.lang = _.find(this.translate.getLangs(), l => l === navigator.language.toLocaleLowerCase()) ?
            navigator.language.toLocaleLowerCase() : this.translate.defaultLang;

          // 已修改
          this.modified = true;
        }
      },
      { text: 'CANCEL' }
    ], () => {
      this.dialog = null;
    });
  }

  apply() {
    this.modified = false;
    localStorage.setItem(ExplorerConfig.name, JSON.stringify(this.config));
    // 多國語言
    this.translate.use(this.lang);
    localStorage.setItem('language', this.lang);

    this.explorerServ.ReloadConfig();
  }

  // 取消背景網址
  disableBgImg() {
    this.config.backgroundImage = '';
    this.modified = true;
  }
}
