import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { VisitComponent } from './pages/visit/visit.component';
import { PatientComponent } from './pages/patient/patient.component';
import { PatientFormComponent } from './pages/patient/patient-from.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'visit',
    component: VisitComponent
  },
  {
    path: 'patient',
    component: PatientComponent
  }, {
    path: 'patients-form/create',
    component: PatientFormComponent
  },
  {
    path: 'patients-form/edit/:pacientId',
    component: PatientFormComponent
  },
  {
    path: '*',
    component: HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
