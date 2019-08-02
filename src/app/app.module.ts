import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// My Components
import { PatientComponent } from './pages/patient/patient.component';
import { PatientFormComponent } from './pages/patient/patient-from.component';
import { PatientStatusComponent } from './pages/patient/patient-status.component';
import { VisitComponent } from './pages/visit/visit.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './utils/header/header.component';
import { FooterComponent } from './utils/footer/footer.component';

// My Sevices
import { PatientService } from './pages/patient/patient.service';
import { VisitService } from './pages/visit/visit.service';

// My Libs
import { AgGridModule } from 'ag-grid-angular';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientFormComponent,
    PatientStatusComponent,
    VisitComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, NgxEchartsModule,
    AgGridModule.withComponents([]),
    AngularFontAwesomeModule
  ],
  providers: [
    PatientService,
    VisitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
