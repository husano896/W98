import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatToEatComponent } from './what-to-eat/what-to-eat.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';

export const APPS = [
  WhatToEatComponent,
  AboutComponent
];

@NgModule({
  declarations: APPS,
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: APPS
})
export class AppsModule { }
