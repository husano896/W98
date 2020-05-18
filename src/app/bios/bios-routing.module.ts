import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BIOSComponent } from './bios.component';
const routes: Routes = [
  { path: '', component: BIOSComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BIOSRoutingModule { }
