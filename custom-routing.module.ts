import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "page1",
        loadChildren: () =>
          import("./page1/page1.module").then((m) => m.Page1PageModule),
      },
      {
        path: "",
        redirectTo: "/custom/page1",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/custom/page1",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomRoutingModule {}
