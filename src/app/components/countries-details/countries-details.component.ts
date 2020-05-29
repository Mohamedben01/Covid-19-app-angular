import { Component, OnInit } from '@angular/core';
import { DataCountries } from 'src/app/models/data-countries';
import { DataServiceService } from 'src/app/services/data-service.service';
import { GlobalDataSummary } from 'src/app/models/global-data';

@Component({
  selector: 'app-countries-details',
  templateUrl: './countries-details.component.html',
  styleUrls: ['./countries-details.component.css']
})
export class CountriesDetailsComponent implements OnInit {

  totalConfirmed = 0;
  totalDeaths = 0;
  totalActive = 0;
  totalRecovered = 0;
  countryvalue="";

  selectedCountryData : DataCountries[];
  dateCountryData ;

  dataTable= [];
  constructor(private dataService: DataServiceService) { }

  golbalData : GlobalDataSummary [];
  data : GlobalDataSummary [];

  countries: String[] = [];

  ngOnInit(): void {

    this.dataService.getGlobalData().subscribe(result =>{
      this.data = result;
      this.data.forEach(cs=>{
        this.countries.push(cs.country);
      })
    })

    this.dataService.getDataCountries().subscribe(result=>{
      this.dateCountryData = result;
      //console.log(result);
    }) 
    }


    updateValues(country: string){
      this.data.forEach(cs=>{
        if(cs.country == country){
          this.totalConfirmed = cs.confirmed;
          this.totalDeaths = cs.deaths;
          this.totalRecovered = cs.recovered;
          this.totalActive = cs.active;
          this.countryvalue = country;
        }
      })

      this.selectedCountryData = this.dateCountryData[country];
    }


 
}
