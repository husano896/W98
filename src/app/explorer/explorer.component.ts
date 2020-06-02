import { Component, OnInit, NgZone } from '@angular/core';

import { APPS } from './apps/apps.module';
import * as _ from 'lodash';
import { WhatToEatComponent } from './apps/what-to-eat/what-to-eat.component';
import { AboutComponent } from './apps/about/about.component';

interface Task {
  component: any;
  title: string;
  icon?: string;
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

  desktopItems = [{
    name: '我的電腦',
    img: null,
    icon: 'computer',
    component: null
  }, {
    name: '我的文件',
    img: null,
    icon: 'folder',
    component: WhatToEatComponent
  }, {
    name: '說明',
    img: null,
    icon: 'help',
    component: AboutComponent
  }];

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    console.log(this.apps);
    this.initalizeBattery();
  }

  styleCallBack() {
    return;
  }

  taskTrackBy(task: Task) {
    return task.component;
  }

  wMessage($event, task) {
    console.log('wmessage', $event, task);
    switch ($event.type) {
      case 'close': {
        _.remove(this.tasks, t => t === task);
      }
    }
  }

  getTimeNow() {
    return new Date();
  }

  // 桌面圖示區
  onAppClick(app) {
    console.log(app);
    this.tasks.push({
      title: app.name,
      component: app.component,
      icon: app.icon
    })
  }

  // 工作列點擊事件區
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
