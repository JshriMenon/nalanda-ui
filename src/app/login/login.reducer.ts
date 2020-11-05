import {createReducer, on} from '@ngrx/store';
import * as LoginActions from './login-actions';

export interface AuthenticationState {
  authenticated: boolean;
  username: string;
}

export const initialState = {
  authenticated: false,
  user: null
};

export const loginFeatureKey = 'authenticationState';

export const loginReducers = createReducer(
  initialState,
  on(LoginActions.loginSuccess, (state, {authenticated, username}) => ({
    ...state,
    authenticated,
    username
  })),
  on(LoginActions.logoutSuccess, (state, {authenticated}) => ({
    ...state,
    authenticated
  }))
);
