import { SharedModule } from 'src/@shared/shared.module';
import { ExplorerComponent } from './explorer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExplorerRoutingModule } from './explorer-routing.module';

@NgModule({
  declarations: [ExplorerComponent],
  imports: [
    CommonModule,
    ExplorerRoutingModule,
    SharedModule
  ]
})
export class ExplorerModule { }
