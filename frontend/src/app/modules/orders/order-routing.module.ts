import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {OrdersComponent} from "./pages/orders/orders.component";
import {IsAuthenticatedGuard} from "../../core/guards/isAuthenticated.guard";

const routes: Routes = [
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [IsAuthenticatedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
