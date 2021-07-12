import { MasterComponent } from './master.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../../modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'contact',
        loadChildren: () => import('../../modules/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../../modules/login/login.module').then(m => m.LoginModule)
      },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterRoutingModule { }
