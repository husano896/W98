import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'bios',
  loadChildren: () => import('./bios/bios.module').then(m => m.BIOSModule)
}, {
  path: 'explorer',
  loadChildren: () => import('./explorer/explorer.module').then(m => m.ExplorerModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
