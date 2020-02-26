import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginResult} from './login.result';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<boolean> {
    this.http.post('/login', {username: email, password}).subscribe((result: LoginResult) => {
      console.log(result);
      sessionStorage.setItem('username', email);
      const tokenStr = 'Bearer ' + result.token;
      sessionStorage.setItem('token', tokenStr);
      return of(true);
    }, (error) => {
      return of(false);
    });
    return of(false);
  }


}
