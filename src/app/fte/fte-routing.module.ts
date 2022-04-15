import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllFteProjectsComponent } from './components/all-fte-projects/all-fte-projects.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { PocComponent } from './components/poc/poc.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FteComponent } from './fte.component';

const routes: Routes = [
  {
    path:'',
    component:FteComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'create-project',
        component:CreateProjectComponent
      },
      {
        path:'profile',
        component:ProfileComponent,

      },
      {
        path:'poc',
        component:PocComponent
      },
      {
        path:'allProjects',
        component:AllFteProjectsComponent
      },
      {
        path:'create-task',
        component:CreateTaskComponent
      },
      {
        path:'projectDetails/:id',
        component:ProjectDetailsComponent
      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FteRoutingModule { }
