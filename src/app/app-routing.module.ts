import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDashboardComponent } from './shared/components/post-dashboard/post-dashboard.component';
import { PostFormComponent } from './shared/components/post-form/post-form.component';
import { PostCardComponent } from './shared/components/post-card/post-card.component';

const routes: Routes = [
  {
    path:"",component:PostDashboardComponent
  },
  {
    path:"home",component:PostDashboardComponent
  },
  {
    path:"home/addPost",component:PostFormComponent
  },
  {
    path:"postsCards",component:PostCardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
