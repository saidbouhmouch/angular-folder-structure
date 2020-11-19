import { FooterComponent } from "./layout/footer/footer.component";
import { SideBarComponent } from "./layout/sideBar/sideBar.component";
import { NavBarComponent } from "./layout/navBar/navBar.component";
import { TemplateComponent } from "./template/template.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ModulesRoutingModule } from "./modules-routing.module";

@NgModule({
  declarations: [
    TemplateComponent,
    NavBarComponent,
    SideBarComponent,
    FooterComponent,
  ],
  imports: [CommonModule, ModulesRoutingModule],
})
export class ModulesModule {}
