import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { DatabindingsComponent } from "./databindings/databindings.component";
import { PipeExampleComponent } from "./pipe-example/pipe-example.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { AuthService } from "./auth.gaurd";
export const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/login"
  },
  // {
  //   path: "lazy",
  //   loadChildren: "app/lazy-module/lazy-module.module#LazyModuleModule"
  // },
  {
    path: "lazy",
    canActivate: [AuthService],
    loadChildren: () =>
      import("./lazy-module/lazy-module.module").then(m => m.LazyModuleModule)
  },

  {
    path: "databinding",
    canActivate: [AuthService],
    component: DatabindingsComponent
  },
  { path: "pipe", canActivate: [AuthService], component: PipeExampleComponent },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
