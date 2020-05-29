import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  //images
  virusimg1: String = 'assets/img/virus.png';
  virusimg2: String = 'assets/img/pillsvirus.png';
  croix: String = 'assets/img/croix1.png';
  covid1: String = 'assets/img/covid1.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
