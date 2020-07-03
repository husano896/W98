
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponentModule } from 'ng-dynamic-component';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '@shared/material.module';
import { ExplorerRoutingModule } from './explorer-routing.module';
import { AppsModule } from './apps/apps.module';
import { SharedModule } from 'src/@shared/shared.module';
import { ExplorerComponent } from './explorer.component';
import { ExplorerErrorHandler } from './explorer.error.handler';

@NgModule({
  declarations: [ExplorerComponent],
  imports: [
    CommonModule,
    ExplorerRoutingModule,
    SharedModule,
    MaterialModule,
    AppsModule,
    DynamicComponentModule,
    TranslateModule.forChild()
  ],
  providers: [{provide: ErrorHandler, useClass: ExplorerErrorHandler}]
})
export class ExplorerModule { }
