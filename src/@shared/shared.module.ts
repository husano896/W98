import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MomentModule } from 'ngx-moment';
import { DynamicComponentModule } from 'ng-dynamic-component';
import { WinTabGroupComponent, WinTabDirective } from './components/win-tab-group/win-tab-group.component';
import { WinWindowComponent, WinWindowDirective } from './components/win-window/win-window.component';
import { MaterialModule } from './material.module';

const components = [
  WinWindowComponent,
  WinWindowDirective,
  WinTabGroupComponent,
  WinTabDirective
];

const MODULES = [
  FlexLayoutModule,
  MomentModule,
  FormsModule,
  MaterialModule,
  DynamicComponentModule,
  TranslateModule
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ...MODULES
  ],
  exports: [...components, ...MODULES]
})
export class SharedModule { }
