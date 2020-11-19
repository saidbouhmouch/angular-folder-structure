import { TemplateComponent } from "./template/template.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: TemplateComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./features/home/home.module").then((m) => m.HomeModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {}
