import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MomentModule } from 'ngx-moment';
import { WinWindowComponent, WinWindowDirective } from './components/win-window/win-window.component';
import { MaterialModule } from './material.module';
import { DynamicComponentModule } from 'ng-dynamic-component';

const components = [
  WinWindowComponent,
  WinWindowDirective
];

const MODULES = [
  FlexLayoutModule,
  MomentModule,
  FormsModule,
  MaterialModule,
  DynamicComponentModule
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
