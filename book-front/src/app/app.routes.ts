import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from '../../../book-network-ui/src/app/pages/login/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configure the root router
  exports: [RouterModule], // Export for use in AppModule
})
export class AppRoutingModule {}
