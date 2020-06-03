import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatToEatComponent } from './what-to-eat/what-to-eat.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ComputerComponent } from './computer/computer.component';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@shared/material.module';

export const APPS = [
  WhatToEatComponent,
  AboutComponent,
  ComputerComponent
];

@NgModule({
  declarations: APPS,
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MaterialModule
  ],
  exports: APPS
})
export class AppsModule { }
