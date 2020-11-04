import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LandingComponent} from './landing.component';
import {LeftNavComponent} from './left-nav.component';


@NgModule({
  declarations: [LandingComponent, LeftNavComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [LandingComponent, LeftNavComponent]
})
export class LandingModule {
}
