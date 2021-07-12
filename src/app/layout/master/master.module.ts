import { MasterComponent } from "./master.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";



import { MasterRoutingModule } from "./master-routing.module";
import {HeaderModule} from "../partials/header/header.module"
import {FooterModule} from "../partials/footer/footer.module"

@NgModule({
  declarations: [MasterComponent],
  imports: [CommonModule, MasterRoutingModule,HeaderModule,FooterModule],
})
export class MasterModule {}
