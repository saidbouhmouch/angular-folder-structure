import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () =>
      import('./modules/template/layout/home/home.module').then(
        (m) => m.HomeModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/template/master/master.module').then(
        (m) => m.MasterModule
      ),
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
