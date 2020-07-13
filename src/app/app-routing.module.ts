import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecretRouteComponent } from './secret-route.component';


const routes: Routes = [
  {
    path: '',
    component: SecretRouteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
