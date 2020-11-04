import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AlgorithmsComponent} from './algorithms.component';
import {DataStructuresComponent} from './data-structures.component';


@NgModule({
  declarations: [AlgorithmsComponent, DataStructuresComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [AlgorithmsComponent, DataStructuresComponent]
})
export class ContentModule {
}
