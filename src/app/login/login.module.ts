import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import * as fromLoginReducer from './login.reducer';
import {EffectsModule} from '@ngrx/effects';
import {LoginEffects} from './login.effects';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forFeature(fromLoginReducer.loginFeatureKey, fromLoginReducer.loginReducers),
    EffectsModule.forFeature([LoginEffects])
  ],
  exports: [LoginComponent]
})
export class LoginModule {
}
