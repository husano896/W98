import { Component, OnInit, NgZone } from '@angular/core';

import { APPS } from './apps/apps.module';
import * as _ from 'lodash';
import { WhatToEatComponent } from './apps/what-to-eat/what-to-eat.component';
import { AboutComponent } from './apps/about/about.component';
import { ComputerComponent } from './apps/computer/computer.component';
import { ActivatedRoute } from '@angular/router';

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

  apps = APPS;

  battery: BatteryManager;
  // 目前開啟的程式
  tasks: Array<Task> = [];
  pidStart = 1;

  desktopItems = [{
    name: '我的電腦',
    img: null,
    icon: 'computer',
    component: ComputerComponent
  }, {
    name: '吃吃喝喝',
    img: null,
    icon: 'local_dining',
    component: WhatToEatComponent
  }, {
    name: '關於',
    img: null,
    icon: 'help',
    component: AboutComponent
  }];

  startMenuItems = [{
    name: '重新整理',
    img: null,
    icon: 'refresh',
    component: null,
    action: () => {
      window.location.reload();
    }
  }];
  constructor(private ngZone: NgZone, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log(this.apps);
    this.initalizeBattery();
    this.route.queryParams.subscribe(params => {
      // 自動執行程式
      let exec = params.autoexec;

      if (exec instanceof Array) {
        // 丟陣列時
        exec = _.uniq(exec);
        exec.forEach(element => {
          this.onAppClick(this.desktopItems.find(i => i.name === element));
        });
      } else {
        this.onAppClick(this.desktopItems.find(i => i.name === exec));
      }
      console.log(exec);
    });
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

  getTimeNow() {
    return new Date();
  }

  // 桌面圖示區
  onAppClick(app) {
    if (!app) {
      return;
    }
    console.log(app);
    this.tasks.push({
      title: app.name,
      component: app.component,
      icon: app.icon,
      pid: this.pidStart
    });
    this.pidStart += 1;
    console.log(this.tasks);
  }

  // 工作列點擊事件區
  onStartClick() {

  }

  onTaskBarTaskClick(task: Task) {
    task.minimize = !task.minimize;
    console.log(this.tasks);
  }

  onLangClick() {
    alert(navigator.language);
  }

  onDateClick() {
    alert(new Date());
  }

  initalizeBattery() {
    const nav: any = navigator;
    if (!nav || !nav.getBattery) {
      return;
    }
    console.log('init battery');
    return nav.getBattery().then((battery: BatteryManager) => {
      battery.onchargingchange = this.onBatteryChange;
      battery.onchargingtimechange = this.onBatteryChange;
      battery.ondischargingtimechange = this.onBatteryChange;
      battery.onlevelchange = this.onBatteryChange;
      battery.component = this;
      // 這邊把this嵌進去，不然等等this會被BatteryManager蓋掉
      this.battery = battery;
    });
  }
  onBatteryChange($event: Event) {
    const b = $event.currentTarget as unknown as BatteryManager;
    b.component.ngZone.run(() => {
      b.component.battery = b;
    });
  }

  onBatteryClick() {
    console.log(this.battery);
  }
}
