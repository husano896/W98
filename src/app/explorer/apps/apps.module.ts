import { NgModule } from '@angular/core';
import { WhatToEatComponent } from './what-to-eat/what-to-eat.component';
import { AboutComponent } from './about/about.component';
import { ComputerComponent } from './computer/computer.component';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@shared/material.module';
import { CommonModule } from '@angular/common';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { ClockComponent } from './clock/clock.component';
import { NotepadComponent } from './notepad/notepad.component';
import { MediaPlayerComponent } from './media-player/media-player.component';

export const APPS = [
  ComputerComponent,
  WhatToEatComponent,
  AboutComponent,
  ControlPanelComponent,
  ClockComponent,
  NotepadComponent,
  MediaPlayerComponent
];

@NgModule({
  declarations: APPS,
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  exports: APPS
})
export class AppsModule { }
