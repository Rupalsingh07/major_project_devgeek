import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FteRoutingModule } from './fte-routing.module';
import { FteComponent } from './fte.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';



//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import {MatSelectModule} from '@angular/material/select';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PocComponent } from './components/poc/poc.component';
import { AllFteProjectsComponent } from './components/all-fte-projects/all-fte-projects.component';
import { CardComponent } from './components/card/card.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';

import { MDBBootstrapModule } from 'angular-bootstrap-md';



@NgModule({
  declarations: [
    FteComponent,
    DashboardComponent,
    CreateProjectComponent,
    ProfileComponent,
    PocComponent,
    AllFteProjectsComponent,
    CardComponent,
    CreateTaskComponent,
    ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    FteRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule,
    MatMenuModule,
    NgMultiSelectDropDownModule,
    MDBBootstrapModule.forRoot()
  ],
  providers:[DatePipe]
})
export class FteModule { }
