import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './navBar/navBar.component';
import { SideBarComponent } from './sideBar/sideBar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SideBarComponent, NavBarComponent, FooterComponent],
  exports: [SideBarComponent, NavBarComponent, FooterComponent],
})
export class LayoutModule {}
