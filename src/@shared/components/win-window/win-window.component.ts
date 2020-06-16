import { element } from 'protractor';
import {
  Component, OnInit, ChangeDetectionStrategy, Input, Directive, Output, AfterViewInit,
  HostListener, ElementRef, EventEmitter, ViewChild, ChangeDetectorRef
} from '@angular/core';
import { NgStyle } from '@angular/common';

// tslint:disable-next-line: directive-selector
@Directive({ selector: '[WinWindow]' })
export class WinWindowDirective {

  // 是否拖拉中
  private dragging = false;

  // 拖拉開始XY
  private dragStartPos = { x: 0, y: 0 };

  constructor(private el: ElementRef) { }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    // 非拖拉中
    if (!this.dragging) {
      return;
    }
    e.preventDefault();
    const nElement = this.el.nativeElement;
    const newX = e.clientX;
    const newY = e.clientY;
    const moveX = this.dragStartPos.x - newX;
    const moveY = this.dragStartPos.y - newY;
    this.dragStartPos = { x: newX, y: newY };
    nElement.style.top = (nElement.offsetTop - moveY) + 'px';
    nElement.style.left = (nElement.offsetLeft - moveX) + 'px';
  }
  @HostListener('mousedown', ['$event'])
  onMouseDown(e) {
    e.preventDefault();
    this.dragging = true;
    this.dragStartPos = { x: e.clientX, y: e.clientY };
  }
  @HostListener('mouseup', ['$event'])
  onMouseUp(e) {
    e.preventDefault();
    this.onMouseMove(e);
    this.dragging = false;
  }
}

@Component({
  selector: 'app-win-window',
  templateUrl: './win-window.component.html',
  styleUrls: ['./win-window.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class WinWindowComponent implements OnInit, AfterViewInit {

  @ViewChild('.window', { static: false }) element: ElementRef;
  // 是否可調整大小
  @Input() resizable = true;

  // 最大化
  @Input() maximize = false;

  // 最小化
  @Input() minimize = false;

  // 視窗標題
  @Input() title = 'Default title';

  // 是否程式繼續運行
  @Input() alive = true;

  // 程式icon
  @Input() icon: string;

  // 程式iconSet
  @Input() iconSet?: string;

  // 是否為作用中視窗
  @Input() active = true;

  // 視窗事件
  @Output() wMessage = new EventEmitter();

  css = { top: 0, left: 0 };

  private dragStartPos = { x: 0, y: 0 };

  closing = false;

  constructor(private el: ElementRef, private changeDetectionRef: ChangeDetectorRef) { }
  ngAfterViewInit(): void {
    console.log(this.el);

  }

  ngOnInit(): void { }

  onDragStart(e: DragEvent) {
    // console.log(e, this);
    // this.dragStartPos = { x: e.x, y: e.y };
    this.dragStartPos = { x: e.screenX, y: e.screenY };
    e.dataTransfer.setData('timestamp', String(e.timeStamp));
    e.dataTransfer.dropEffect = 'move';
  }

  onDragEnd(e: DragEvent) {
    // console.log(e, this);
    // this.css.left += e.clientX - this.dragStartPos.x;
    // this.css.top += e.clientY - this.dragStartPos.y;
    this.css.left += e.screenX - this.dragStartPos.x;
    this.css.top += e.screenY - this.dragStartPos.y;
    this.onResize();
  }

  // 縮小按鈕
  btnMinimize() {
    this.wMessage.emit({ type: 'minimize' });
    this.minimize = !this.minimize;
  }

  // 最大化按鈕
  btnMaximize() {
    // 修正未resize過放大時會沒辦法滿版的問題
    const windowDIV = (this.el.nativeElement as HTMLElement).firstElementChild as HTMLElement;
    if (!this.maximize) {
      console.log(windowDIV);
      windowDIV.style.width = `${windowDIV.offsetWidth - 6}px`;
      windowDIV.style.height = `${windowDIV.offsetHeight - 6}px`;
    } else {
      windowDIV.style.width = `${windowDIV.style.width + 6}px`;
      windowDIV.style.height = `${windowDIV.style.height + 6}px`;
    }
    this.maximize = !this.maximize;
    this.wMessage.emit({ type: 'maximize' });
    this.css = { left: 0, top: 0 };
  }

  // 關閉按鈕
  btnClose() {
    if (this.closing) { return; }
    this.closing = true;
    this.changeDetectionRef.detectChanges();
    // 按下關閉後就去除所有判定
    this.changeDetectionRef.detach();
    setTimeout(() => {
      this.alive = false;
      this.wMessage.emit({ type: 'close' });

      this.changeDetectionRef.detectChanges();
    }, 500);
  }

  // 動態CSS變更
  styleCallBack() {
    return this.css;
  }
  // 動態Class變更
  classCallBack() {
    return {
      resizable: this.resizable,
      maximize: this.maximize,
      minimize: this.minimize,
      animate__zoomIn: this.maximize,
      animate__zoomOut: this.closing,
      active: !this.active
    };
  }

  get Portrait() {
    return window.innerHeight > window.innerWidth;
  }
  @HostListener('window:resize', ['$event'])
  onResize(e?) {
    const w: HTMLBaseElement = this.el.nativeElement.children[0];
    if (!window) {
      return;
    }
    // 邊界偵測
    this.css.left = Math.max(0,
      Math.min(window.innerWidth - Number(w.offsetWidth), this.css.left));

    this.css.top = Math.max(0,
      Math.min(window.innerHeight - Number(w.offsetHeight), this.css.top));

    console.log(this.css);
    // 手機版自動放大
    if (this.Portrait) {
      this.maximize = true;
      this.minimize = false;
      this.css.left = 0;
      this.css.top = 0;
    }
  }
}
