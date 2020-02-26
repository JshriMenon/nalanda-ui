import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {LoginService} from './login.service';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from './login.reducer';
import {EMPTY} from 'rxjs';

@Injectable()
export class LoginEffects {
  constructor(private actions$: Actions,
              private loginService: LoginService,
              private store: Store<AppState>) {

  }

  authenticate$ = createEffect(() => this.actions$.pipe(
    ofType('[Login Page] Authenticate'),
    mergeMap((action: any) => this.loginService.login(action.username, action.password)
      .pipe(
        map(val => ({ type: '[Login Page] Login Success', payload: val })),
        catchError(() => EMPTY)
      ))
    )
  );
}


