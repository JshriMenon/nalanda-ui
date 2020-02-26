import {createReducer, on} from '@ngrx/store';
import * as LoginActions from './login-actions';

export interface AppState {
  authenticated: boolean;
  user: string;
};

export const initialState = {
  authenticated: false,
  user: null
};

export const loginFeatureKey = 'login';

export const loginReducers = createReducer(
  initialState,
  on(LoginActions.loginSuccess, state => ({authenticated: true}))
);
