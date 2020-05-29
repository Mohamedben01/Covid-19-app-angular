import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { GlobalDataSummary } from 'src/app/models/global-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //images
  

  //Variables
  totalConfirmed = 0;
  totalDeaths = 0;
  totalActive = 0;
  totalRecovered = 0;
  datatable = [];
  chart = {
    PieChart : "PieChart",
    ColumnChart : "ColumnChart",
    width: 500,
    height: 400,
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

  
  

  initChart(caseType : String){
    
    //this.datatable.push(['Country','Cases']);
    this.datatable = [];
    this.golbalData.forEach(cs=>{
      let value : number;
      if(caseType == 'cnf'){
        if(cs.confirmed >2000){
          value = cs.confirmed
        }
      }
        
      if(caseType == 'death'){
        if(cs.deaths >1000){
          value = cs.deaths
        }
      }  

      if(caseType == 'rec'){
        if(cs.recovered >2000){
          value = cs.recovered
        }
      }
        
      if(caseType == 'act'){
        if(cs.active >2000){
          value = cs.active
        }
      }

      this.datatable.push([
        cs.country, value
      ])  
        
           
    })

    
      
   
  }
  ngOnInit(): void {
    this.dataService.getGlobalData()
        .subscribe(
          {
            next: (result =>{
              this.golbalData = result;

              result.forEach(cs=>{
                if(!Number.isNaN(cs.confirmed))
                {
                this.totalConfirmed += cs.confirmed;
                this.totalDeaths += cs.deaths;
                this.totalActive += cs.active;
                this.totalRecovered += cs.recovered;
                }
              })
              this.initChart('cnf');
            })
          }
        )

        this.dataService.getGlobalData()
            .subscribe(result =>{
              this.data = result;
              this.data.forEach(cs=>{
                this.countries.push(cs.country);
              })
            })
  }

  updateChart(input : HTMLInputElement){
    console.log(input.value);
    this.initChart(input.value);
  }

}

