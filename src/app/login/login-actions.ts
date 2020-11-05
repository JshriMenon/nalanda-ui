import {createAction, props, union} from '@ngrx/store';

export const triggerLogin = createAction(
  '[Login Page] Authenticate',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Login Page] Login Success',
  props<{ authenticated: boolean; username: string; }>()
);


export const loginFailure = createAction(
  '[Login Page] Login Failure',
);

export const doLogout = createAction(
  '[Logout] Do LogOut',
  props<{ authenticated: boolean }>()
);

export const logoutSuccess = createAction(
  '[Logout] LogOut Success',
  props<{ authenticated: boolean }>()
);
