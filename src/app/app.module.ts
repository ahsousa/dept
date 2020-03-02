import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderNavComponent } from './core/components/header-nav/header-nav.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { Error404Component } from './core/components/error404/error404.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { ClientsComponent } from './clients/clients.component';
import { WorkComponent } from './work/work.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { SponsoredProjectsComponent } from './sponsored-projects/sponsored-projects.component';
import { NonSponsoredProjectsComponent } from './non-sponsored-projects/non-sponsored-projects.component';
import { FilterPipe } from './core/pipes/filter.pipe';
import { FilterComponent } from './core/components/filter/filter.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderNavComponent,
    FooterComponent,
    Error404Component,
    ClientsComponent,
    WorkComponent,
    TestimonialComponent,
    QuestionnaireComponent,
    SponsoredProjectsComponent,
    NonSponsoredProjectsComponent,
    FilterPipe,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    DeviceDetectorModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
