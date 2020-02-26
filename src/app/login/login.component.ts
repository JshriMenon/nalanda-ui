import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {Store} from '@ngrx/store';
import {triggerLogin} from './login-actions';
import {AppState} from './login.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
  }

  login() {
    this.store.dispatch(triggerLogin({username: this.email, password: this.password}));
  }
}
