import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../app.state';
import {doLogout} from '../login/login-actions';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {
  loggedInState = false;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.select('authenticationState')
      .subscribe(authenticationState => {
        console.log('Simple Select ====> :', authenticationState.authenticated);
        this.loggedInState = authenticationState.authenticated;
      });
  }

  logout() {
    this.store.dispatch(doLogout({authenticated: false}));
  }
}
