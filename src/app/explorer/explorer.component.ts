import { Component, OnInit, NgZone, NgModuleFactory, Compiler, Injector, ReflectiveInjector } from '@angular/core';

import { APPS, AppsModule } from './apps/apps.module';
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';
import * as S from './Sounds';

interface Task {
  component: any;
  title: string;
  icon?: string;
  pid: number;
  maximize?: boolean;
  minimize?: boolean;
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
export class ExplorerComponent implements OnInit {

  appsModule: NgModuleFactory<any>;
  appsInjector: Injector;
  apps = APPS;

  battery: BatteryManager;
  // 目前開啟的程式
  tasks: Array<Task> = [];
  pidStart = 1;
  activeWindow: Task;

  desktopItems: Array<any> = APPS;

  startMenuItems = [{
    name: '重新整理',
    img: null,
    icon: 'refresh',
    component: null,
    action: () => {
      window.location.reload();
    }
  }];
  constructor(injector: Injector, private ngZone: NgZone, private route: ActivatedRoute) {
    this.appsInjector = injector;
  }

  ngOnInit(): void {
    console.log('Apps', this.apps);
    this.initalizeBattery();
    this.route.queryParams.subscribe(params => {
      // 自動執行程式
      let exec = params.autoexec;

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
    S.SndStartUp.play();
  }

  styleCallBack() {
    return;
  }

  taskTrackBy(task: Task) {
    return task.pid;
  }

  wMessage($event, task: Task) {
    console.log('wmessage', $event, task);
    switch ($event.type) {
      case 'close': {
        console.log(this.tasks, task);
        _.remove(this.tasks, t => t.pid === task.pid);
        this.activeWindow = (this.tasks.length > 0) ? _.last(this.tasks) : null;
        break;
      }
      case 'maximize': {
        task.maximize = !task.maximize;
        break;
      }
      case 'minimize': {
        task.minimize = !task.minimize;
        break;
      }
    }
  }

  appMessage($event) {
    console.log($event);
  }
  getTimeNow() {
    return new Date();
  }
  onWindowClick($event: Event, task?: any) {
    this.activeWindow = task;
    console.log('click', task);
  }
  // 桌面圖示區
  onAppClick($event, app) {
    if (!app) {
      return;
    }
    $event.stopPropagation();
    console.log(app);
    const newTask = {
      title: app.appName,
      component: app,
      icon: app.icon,
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

  convertPercent(i: number) {
    return Math.round(i * 100);
  }
}
