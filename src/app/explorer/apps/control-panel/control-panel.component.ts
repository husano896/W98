import { Component, OnInit } from '@angular/core';
import { AppBase } from '../AppBase';
import { ExplorerConfig } from '../../ExplorerConfig';
import { ExplorerService } from '../../explorer.service';
import * as S from '../../Sounds';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})

export class ControlPanelComponent extends AppBase implements OnInit {
  public static appName = '控制台';
  public static icon = 'settings';
  public static description = '唐鳳的秘密控制中心';

  modified: boolean;

  config: ExplorerConfig;
  constructor(private explorerServ: ExplorerService) { super(); }

  ngOnInit(): void {
    const cfg = localStorage.getItem(ExplorerConfig.name);
    if (!cfg) {
      this.config = new ExplorerConfig();
      localStorage.setItem(ExplorerConfig.name, JSON.stringify(this.config));
    } else {
      this.config = JSON.parse(cfg);
    }
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
    this.explorerServ.ReloadConfig();
  }
}
