import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChorusComponent } from './components/chorus/chorus.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { authGuard } from './guards/auth.guard';
import { LogoutComponent } from './components/logout/logout.component';

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
    path: 'logout',
    title: 'Logout' + TITLE_SUFFIX,
    component: LogoutComponent,
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
