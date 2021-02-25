import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "./contact/pages/contact/contact.component";
import { DevComponent } from "./development/pages/dev/dev.component";
import { HomeComponent } from './home/pages/home/home.component';
import { LoginComponent } from "./login/pages/login/login.component";

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "home", component: HomeComponent},
  { path: "login", component: LoginComponent},
  { path: "contact", component: ContactComponent},
  { path: "dev", component: DevComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
