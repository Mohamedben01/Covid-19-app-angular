import { Component, OnInit } from '@angular/core';
import { DataCountries } from '../../models/data-countries';
import { DataServiceService } from '../../services/data-service.service';
import { GlobalDataSummary } from '../../models/global-data';

@Component({
  selector: 'app-countries-data',
  templateUrl: './countries-data.component.html',
  styleUrls: ['./countries-data.component.css']
})
export class CountriesDataComponent implements OnInit {
  
  
  constructor() { }

  ngOnInit(): void {
  }

  

}
