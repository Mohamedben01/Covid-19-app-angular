import { Injectable, ɵLocaleDataIndex } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { splitAtColon } from '@angular/compiler/src/util';
import { GlobalDataSummary } from '../models/global-data';
import { DataCountries } from '../models/data-countries';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private baseUrl= 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/';
  private golobalDataUrl= '';
  private extention= '.csv';

  private dataUrlCountries = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv';

  

  month;
  date;
  year;


  
  getDate(date: number){
    if(date < 10){
      return"0"+date;
    }
    return date;
  }
  


  constructor(private http: HttpClient) {
    let newDate = new Date();
  
      this.month = newDate.getMonth() + 1;
      this.date = newDate.getDate();
      this.year = newDate.getFullYear();

      this.golobalDataUrl = this.baseUrl+this.getDate(this.month)+'-'+this.getDate(this.date)+'-'+this.year+this.extention;
      //console.log(this.golobalDataUrl);
    
  }

  

  getGlobalData(){
    return this.http.get(this.golobalDataUrl, {responseType: 'text'}).pipe(
      map(result =>{
        let data: GlobalDataSummary[] = [];
        let raw = {};
        let rows= result.split('\n');
        rows.splice(0, 1);


        //console.log(rows);
        rows.forEach(row =>{
          let cols= row.split(/,(?=\S)/);


          let cs= {
            country: cols[3],
            confirmed: +cols[7],
            deaths: +cols[8],
            recovered: +cols[9],
            active: +cols[10]
          };

          let temp: GlobalDataSummary = raw[cs.country];
          if(temp){
            temp.active = cs.active + temp.active;
            temp.confirmed = cs.confirmed + temp.confirmed;
            temp.recovered = cs.recovered + temp.recovered;
            temp.deaths = cs.deaths + temp.deaths;
            

            raw[cs.country]= temp;
          }else{
            raw[cs.country]= cs;
          }
        })
        return <GlobalDataSummary[]>Object.values(raw);
      }
      ),
      catchError((error: HttpErrorResponse)=>{
        if(error.status == 404){
          this.date = this.date-1 
          this.golobalDataUrl = this.baseUrl+this.getDate(this.month)+'-'+this.getDate(this.date)+'-'+this.year+this.extention;
          //console.log(this.golobalDataUrl); 
          return this.getGlobalData()
        }
      })
    )        
  }


  getDataCountries(){
    return this.http.get(this.dataUrlCountries, {responseType: 'text'}).pipe(
      map(result =>{
        let rows = result.split("\n");
        let mainData = {};
        let header = rows[0];
        let dates = header.split(/,(?=\S)/)
        dates.splice(0 , 4);
        rows.splice(0 , 1);
        
        rows.forEach(row =>{
          let cols = row.split(/,(?=\S)/)
          let cont = cols[1];
          cols.splice(0 , 4);
          console.log(cont, cols)
          mainData[cont] = [];
          cols.forEach((value, index) =>{
            let dw : DataCountries = {
              cases: +value,
              country: cont,
              date: new Date(Date.parse(dates[index]))
            }
            mainData[cont].push(dw);

          })
        })
        return mainData;
      })
    )
  }
}

