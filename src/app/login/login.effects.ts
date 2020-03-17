import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {LoginService} from './login.service';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import * as LoginActions from './login-actions';
import {loginSuccess} from './login-actions';

@Injectable()
export class LoginEffects {
  constructor(private actions$: Actions,
              private loginService: LoginService) {

  }

  authenticate$ = createEffect(() => this.actions$.pipe(
    ofType(LoginActions.triggerLogin),
    mergeMap((action: any) => this.loginService.login(action.username, action.password).pipe(
      map(val => {
        console.log('Got Val in the effect', val);
        return (
          loginSuccess({authenticated: val, username: action.username})
        );
      }),
      catchError((err) => {
        console.log('Error in effect', err);
        return of(LoginActions.loginFailure);
        // return EMPTY;
      })
      )
    ))
  );
}


