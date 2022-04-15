import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProjectsComponent } from './components/all-projects/all-projects.component';
import { AllTracksComponent } from './components/all-tracks/all-tracks.component';
import { PocComponent } from './components/poc/poc.component';
import { ProjectTaskComponent } from './components/project-task/project-task.component';
import { TrackTaskComponent } from './components/track-task/track-task.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InternComponent } from './intern.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  {
    path:'',
    component:InternComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'allTracks',
        component:AllTracksComponent
      },
      {
        path:'allProjects',
        component:AllProjectsComponent
      },
      {
        path:'poc',
        component:PocComponent
      }
      
      ,{
        path:'track/:id',
        component:TrackTaskComponent
      },
      {
        path:'project/:id',
        component:ProjectTaskComponent
      },

       {path:'profile',
        component:ProfileComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternRoutingModule { }
