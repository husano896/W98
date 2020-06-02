import { WinWindowComponent, WinWindowDirective } from './components/win-window/win-window.component';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'ngx-moment';
import { MaterialModule } from './material.module';

const components = [
  WinWindowComponent,
  WinWindowDirective
];

const MODULES = [
  FlexLayoutModule,
  MomentModule,
  MaterialModule
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
