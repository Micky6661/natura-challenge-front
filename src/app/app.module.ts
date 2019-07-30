import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './pages/patient/patient.component';
import { VisitComponent } from './pages/visit/visit.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './utils/header/header.component';
import { FooterComponent } from './utils/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    VisitComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
