import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {IsAdminGuard} from "../../core/guards/isAdmin.guard";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [IsAdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
