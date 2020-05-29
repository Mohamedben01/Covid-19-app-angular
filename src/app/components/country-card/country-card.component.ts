import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent implements OnInit {

  
  @Input('totalConfirmed')
  totalConfirmed;
  @Input('totalRecovered')
  totalRecovered;
  @Input('totalDeaths')
  totalDeaths;
  @Input('totalActive')
  totalActive;



  constructor() { }

  ngOnInit(): void {
  }

}
