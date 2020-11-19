import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/template/layout/home/home.module').then(
        (m) => m.HomeModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/template/layout/admin/admin.module').then(
        (m) => m.AdminModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
