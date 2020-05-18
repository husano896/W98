import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BIOSRoutingModule } from './bios-routing.module';
import { BIOSComponent } from './bios.component';

@NgModule({
  declarations: [BIOSComponent],
  imports: [
    CommonModule,
    BIOSRoutingModule
  ]
})
export class BIOSModule { }
