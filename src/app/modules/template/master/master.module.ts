import { MasterComponent } from "./master.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MasterRoutingModule } from "./master-routing.module";

@NgModule({
  declarations: [MasterComponent],
  imports: [CommonModule, MasterRoutingModule],
})
export class MasterModule {}
