import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { TasksComponent } from './components/tasks/tasks.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from  './components/signin/signin.component';

const routes: Routes = [
  { path:'', redirectTo:'/tasks', pathMatch:'full' },
  { path:'private', component: PrivateTasksComponent, canActivate:[AuthGuard] },
  { path:'tasks', component:TasksComponent },
  { path:'signin', component:SigninComponent },
  { path:'signup', component:SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
