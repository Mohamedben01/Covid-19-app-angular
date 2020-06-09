import { Component, OnInit } from '@angular/core';
import { GlobalDataSummary } from '../../models/global-data';
import { DataServiceService } from '../../services/data-service.service';
import { DataCountries } from '../../models/data-countries';

@Component({
  selector: 'app-countries-global-data',
  templateUrl: './countries-global-data.component.html',
  styleUrls: ['./countries-global-data.component.css']
})
export class CountriesGlobalDataComponent implements OnInit {
  totalConfirmed = 0;
  totalDeaths = 0;
  totalActive = 0;
  totalRecovered = 0;
  countryvalue="";

  selectedCountryData : DataCountries[];
  dateCountryData ;

  dataTable= [];
  
  chart = {
    LineChart : "LineChart",
    height: 250,
    width: 350,
    options: {
      animation:{
        duration: 1000,
        easing: 'out'
      },
      is3D: true
    }
  }
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
      this.updateChart();
      //console.log(result);
    }) 
    }

    updateChart(){
      this.dataTable =[];
      this.selectedCountryData.forEach(cs=>{
        this.dataTable.push([cs.date , cs.cases])
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
      this.updateChart();
    }


}
