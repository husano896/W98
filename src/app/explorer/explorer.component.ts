import { Component, OnInit, NgZone, NgModuleFactory, Injector, OnDestroy } from '@angular/core';
import { APPS } from './apps/apps.module';
import { ActivatedRoute } from '@angular/router';
import { ExplorerConfig } from './ExplorerConfig';
import { ExplorerService } from './explorer.service';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';
import * as S from './Sounds';
import { SwUpdate, SwPush } from '@angular/service-worker';

interface Task {
  component: any;
  title: string;
  icon?: string;
  pid: number;
  maximize?: boolean;
  minimize?: boolean;
  iconSet?: string;
}

interface BatteryManager {
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  level: number; // 0~1.00
  onchargingchange?: (ev?: any) => void;
  onchargingtimechange?: (ev?: any) => void;
  ondischargingtimechange?: (ev?: any) => void;
  onlevelchange?: (ev?: any) => void;
  component?: ExplorerComponent;
}
@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit, OnDestroy {

  appsModule: NgModuleFactory<any>;
  appsInjector: Injector;
  apps = APPS;
  S = S;
  battery: BatteryManager;
  // 目前開啟的程式
  tasks: Array<Task> = [];
  pidStart = 1;
  activeWindow: Task;

  desktopItems: Array<any> = APPS;

  config: ExplorerConfig = new ExplorerConfig();

  // Service Worker
  public swReady: boolean;
  public swUpdateReady: boolean;
  ///
  startMenuItems = [{
    name: '重新整理',
    img: null,
    icon: 'refresh',
    component: null,
    action: () => {
      window.location.reload();
    }
  }];

  private subscriptions: Array<Subscription> = [];
  constructor(
    injector: Injector,
    private route: ActivatedRoute,
    private explorerServ: ExplorerService,
    private swUpdate: SwUpdate) {
    this.appsInjector = injector;

    // Service Worker
    if (this.swUpdate.isEnabled) {
      console.log(this.swUpdate);
      this.swReady = true;
      this.swUpdate.checkForUpdate();

      // 有新版已準備好時
      this.subscriptions.push(this.swUpdate.available.subscribe((ev) => {
        this.swUpdateReady = true;
      }));
    }

  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => {
      if (s) {
        s.unsubscribe();
      }
    });
  }

  ngOnInit(): void {
    // 設定載入
    this.LoadConfig();
    console.log('Apps', this.apps);

    // 電池掛載
    this.initalizeBattery();

    // 路由自動執行註冊
    this.route.queryParams.subscribe(params => {
      console.log(params);
      console.log(this.desktopItems);
      // 自動執行程式
      let exec = params.exec;

      if (exec instanceof Array) {
        // 丟陣列時
        exec = _.uniq(exec);
        exec.forEach(element => {
          this.onAppClick(new Event('click'), this.desktopItems.find(i => i.appName === element));
        });
      } else {
        this.onAppClick(new Event('click'), this.desktopItems.find(i => i.appName === exec));
      }
      if (exec) {
        console.log(exec);
      }
    });

    // 監聽事件
    this.subscriptions.push(this.explorerServ.ReloadConfig$.subscribe(() => this.LoadConfig()));

    // 開機程序跑完後的結尾
    S.SndStartUp.play();
  }

  LoadConfig() {
    // 載入設定
    const cfg = localStorage.getItem(ExplorerConfig.name);
    if (!cfg) {
      this.config = new ExplorerConfig();
      localStorage.setItem(ExplorerConfig.name, JSON.stringify(this.config));
    } else {
      try {
        this.config = JSON.parse(cfg);
      } catch {
        // 讀取失敗?
        console.warn('讀取設定發生錯誤, 返回預設值.');
        this.config = new ExplorerConfig();
        localStorage.setItem(ExplorerConfig.name, JSON.stringify(this.config));
      }
    }
    console.log(this.config);
  }

  // 桌面樣式
  styleCallBack() {
    return {
      background: this.config.background,
      'background-image': `url(${this.config.backgroundImage})`,
      'background-size': 'cover'
    };
  }

  taskTrackBy(task: Task) {
    return task.pid;
  }

  wMessage($event, task: Task) {
    console.log('wmessage', $event, task);
    switch ($event.type) {
      // App關閉
      case 'close': {
        console.log(this.tasks, task);
        _.remove(this.tasks, t => t.pid === task.pid);
        this.activeWindow = (this.tasks.length > 0) ? _.last(this.tasks) : null;
        break;
      }
      // App放大還原
      case 'maximize': {
        task.maximize = !task.maximize;
        S.SndMaximize.play();
        break;
      }
      // App最小化
      case 'minimize': {
        task.minimize = !task.minimize;
        S.SndMinimize.play();
        break;
      }
    }
  }

  appMessage($event, task) {
    this.wMessage($event, task);
  }

  getTimeNow() {

    return new Date();
  }
  onWindowClick(task?: any) {
    this.activeWindow = task;
  }

  // 桌面圖示區
  onAppClick($event, app) {
    if (!app) {
      return;
    }
    if (this.swUpdate.isEnabled) {
      this.swUpdate.checkForUpdate();
    }
    $event.stopPropagation();
    const newTask = {
      title: app.appName,
      component: app,
      icon: app.icon,
      iconSet: app.iconSet,
      pid: this.pidStart
    };
    this.tasks.push(newTask);
    this.pidStart += 1;
    console.log(this.tasks);
    this.activeWindow = newTask;
    S.SndStart.play();
  }

  // 工作列點擊事件區
  onStartClick() {

  }

  onTaskBarTaskClick($event, task: Task) {
    task.minimize = !task.minimize;
    console.log(this.tasks);
    if (!task.minimize) {
      this.activeWindow = task;
      $event.stopPropagation();
      S.SndMaximize.play();
    } else {
      S.SndMinimize.play();
    }
  }

  onLangClick() {
    S.SndDing.play();
    alert(navigator.language);
  }

  onDateClick() {
    S.SndDing.play();
    alert(new Date());
  }

  initalizeBattery() {
    const nav: any = navigator;
    if (!nav || !nav.getBattery) {
      return;
    }
    console.log('init battery');
    return nav.getBattery().then((battery: BatteryManager) => {
      battery.onchargingchange = this.onBatteryChange.bind(this);
      battery.onchargingtimechange = this.onBatteryChange.bind(this);
      battery.ondischargingtimechange = this.onBatteryChange.bind(this);
      battery.onlevelchange = this.onBatteryChange.bind(this);

      this.battery = battery;
    });
  }
  onBatteryChange($event: Event) {
    const b = $event.currentTarget as unknown as BatteryManager;
    this.battery = b;
  }

  onBatteryClick() {
    console.log(this.battery);
  }

  onSwClick() {
    alert('Service Worker已啟用.');
  }

  convertPercent(i: number) {
    return Math.round(i * 100);
  }
}
