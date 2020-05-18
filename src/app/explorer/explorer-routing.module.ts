import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExplorerComponent } from './explorer.component';

const routes: Routes = [
  { path: '', component: ExplorerComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExplorerRoutingModule { }
