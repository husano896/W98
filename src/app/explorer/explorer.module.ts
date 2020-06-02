import { SharedModule } from 'src/@shared/shared.module';
import { ExplorerComponent } from './explorer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExplorerRoutingModule } from './explorer-routing.module';
import { AppsModule } from './apps/apps.module';
import { MaterialModule } from '@shared/material.module';

@NgModule({
  declarations: [ExplorerComponent],
  imports: [
    CommonModule,
    ExplorerRoutingModule,
    SharedModule,
    MaterialModule,
    AppsModule
  ]
})
export class ExplorerModule { }
