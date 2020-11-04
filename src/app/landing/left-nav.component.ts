import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.less']
})
export class LeftNavComponent implements OnInit {

  @Input()
  navItems: Array<string>;

  constructor() { }

  ngOnInit(): void {
  }

}
