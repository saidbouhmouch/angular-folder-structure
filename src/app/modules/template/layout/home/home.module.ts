import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavBarComponent } from '../../partials/navBar/navBar.component';
import { SideBarComponent } from '../../partials/sideBar/sideBar.component';
import { FooterComponent } from '../../partials/footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    SideBarComponent,
    FooterComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
