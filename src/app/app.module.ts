import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { AboutComponent } from './components/about/about.component';


import { HttpClientModule } from '@angular/common/http';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { CountriesDataComponent } from './components/countries-data/countries-data.component';
import { CountriesGlobalDataComponent } from './components/countries-global-data/countries-global-data.component';
import { AgmCoreModule } from '@agm/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ServiceComponent,
    AboutComponent,
    CountryCardComponent,
    CountriesGlobalDataComponent,
    CountriesDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule,
    BrowserAnimationsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
