import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginResult} from './login.result';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<boolean> {
    return this.http.post('/login', {username: email, password})
      .pipe(
        map((result: LoginResult) => {
          sessionStorage.setItem('username', email);
          const tokenStr = 'Bearer ' + result.token;
          sessionStorage.setItem('token', tokenStr);
          return true;
        }),
        catchError((err) => {
          console.log('Error in LoginService', err);
          return of(false);
        })
      );
  }


}
