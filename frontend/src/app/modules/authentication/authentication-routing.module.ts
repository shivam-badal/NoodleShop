import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
// import {IsNotAuthenticatedGuard} from "../../core/guards/notAuthenticated.guard";
import {IsAuthenticatedGuard} from "../../core/guards/isAuthenticated.guard";

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        // canActivate: [IsNotAuthenticatedGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        // canActivate: [IsNotAuthenticatedGuard]
    },

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule{}
