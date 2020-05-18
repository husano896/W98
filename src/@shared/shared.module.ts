import { WinWindowComponent, WinWindowDirective } from './components/win-window/win-window.component';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
const components = [
  WinWindowComponent,
  WinWindowDirective
];
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [...components]
})
export class SharedModule { }
