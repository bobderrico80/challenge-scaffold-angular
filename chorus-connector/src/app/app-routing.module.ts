import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChorusComponent } from './components/chorus/chorus.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { authGuard } from './guards/auth.guard';

const TITLE_SUFFIX = ' | Chorus Connector';

const routes: Routes = [
  {
    path: '',
    title: 'View Choruses' + TITLE_SUFFIX,
    component: ChorusComponent,
  },
  {
    path: 'login',
    title: 'Login' + TITLE_SUFFIX,
    component: LoginComponent,
  },
  {
    path: 'admin',
    title: 'Administration' + TITLE_SUFFIX,
    component: AdminComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
