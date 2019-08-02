import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { VisitComponent } from './pages/visit/visit.component';
import { PatientComponent } from './pages/patient/patient.component';
import { PatientFormComponent } from './pages/patient/patient-from.component';
import { PatientStatusComponent } from './pages/patient/patient-status.component';
import { VisitFormComponent } from './pages/visit/visit-form.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'visit',
    component: VisitComponent
  }, {
    path: 'visit-form/create',
    component: VisitFormComponent
  }, {
    path: 'visit-form/edit/:visitId',
    component: VisitFormComponent
  }, {
    path: 'patient',
    component: PatientComponent
  }, {
    path: 'patients-form/create',
    component: PatientFormComponent
  }, {
    path: 'patients-form/edit/:pacientId',
    component: PatientFormComponent
  }, {
    path: 'patients-status/:pacientId',
    component: PatientStatusComponent
  }, {
    path: '*',
    component: HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
