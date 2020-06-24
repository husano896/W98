import { Component, OnInit, Directive, Input, TemplateRef, ContentChildren, QueryList, AfterViewInit, ChangeDetectorRef } from '@angular/core';


@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[WinTab]'
})
export class WinTabDirective {
  // 顯示標題 (會自動translate)
  @Input() title: string;

  // 欄位內部名
  @Input('WinTab') columnName: string;

  constructor(public templateRef: TemplateRef<any>) { }
}

@Component({
  selector: 'app-win-tab-group',
  templateUrl: './win-tab-group.component.html',
  styleUrls: ['./win-tab-group.component.scss']
})
export class WinTabGroupComponent implements OnInit, AfterViewInit {

  // 取得帶有Column Directive的Template
  @ContentChildren(WinTabDirective)
  columnQueryList: QueryList<WinTabDirective>;

  // 目前顯示中的分頁
  @Input() activeIndex = 0;
  constructor(private changeDetector: ChangeDetectorRef) { }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

}
