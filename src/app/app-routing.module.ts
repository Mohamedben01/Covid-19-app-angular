import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { AboutComponent } from './components/about/about.component';
import { TeamComponent } from './components/team/team.component';
import { CountriesDataComponent } from './components/countries-data/countries-data.component';
import { CountriesGlobalDataComponent } from './components/countries-global-data/countries-global-data.component';
import { CountriesDetailsComponent } from './components/countries-details/countries-details.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'service', component: ServiceComponent , 
    children :[
               { path: 'countries-data', component: CountriesDataComponent},
               { path: 'countiries-global-data', component: CountriesGlobalDataComponent},
               { path: 'countries-details', component: CountriesDetailsComponent},
              ]
  },
  { path: 'about', component: AboutComponent},
  { path: 'team' , component: TeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
