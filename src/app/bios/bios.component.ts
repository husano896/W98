import { Component, OnInit, VERSION, HostListener, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { SwPush, SwUpdate } from '@angular/service-worker';

interface Statistics {
  angularVersion: string;
  navigator: Navigator;
}
@Component({
  selector: 'app-bios',
  templateUrl: './bios.component.html',
  styleUrls: ['./bios.component.scss']
})
export class BIOSComponent implements OnInit {

  stat: Statistics;

  bootTimeOut: NodeJS.Timeout;
  constructor(private router: Router, private changeDetectionRef: ChangeDetectorRef, private swUpdate: SwUpdate) {
    // 拿數據時間
    this.stat = {
      angularVersion: VERSION.full,
      navigator
    };
  }
  ngOnInit() {
    this.bootTimeOut = setTimeout(() => {
      this.Boot();
    }, 5000);
  }

  Boot() {
    this.router.navigate(['/explorer'], {queryParamsHandling: 'preserve'});
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown($event: KeyboardEvent) {
    console.log($event);
    // 按下Esc中斷時
    if ($event.key === 'Escape') {
      if (this.bootTimeOut) {
        clearTimeout(this.bootTimeOut);
        this.bootTimeOut = null;
      }
    }
    // 按下F2恢復時
    if ($event.key === 'F2') {
      if (!this.bootTimeOut) {
        this.changeDetectionRef.detach();
        location.reload();
      }
    }
  }
}
