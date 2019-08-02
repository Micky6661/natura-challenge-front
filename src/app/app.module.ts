import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { PatientComponent } from './pages/patient/patient.component';
import { PatientFormComponent } from './pages/patient/patient-from.component';
import { VisitComponent } from './pages/visit/visit.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './utils/header/header.component';
import { FooterComponent } from './utils/footer/footer.component';

import { PatientService } from './pages/patient/patient.service';

import { AgGridModule } from 'ag-grid-angular';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientFormComponent,
    VisitComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    AngularFontAwesomeModule
  ],
  providers: [
    PatientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
