import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.less']
})
export class LandingComponent implements OnInit {

  navItems = ['Algorithms', 'Data Structures', 'Others'];

  constructor() { }

  ngOnInit(): void {
  }

}
