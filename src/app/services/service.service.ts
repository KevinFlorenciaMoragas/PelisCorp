import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { RegisterComponent } from '../user/register/register.component';
import { LoginComponent } from '../user/login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { Credentials } from '../interfaces/interfaces.component';
@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private http: HttpClient, private cookieService: CookieService) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  // register
  registerUser(registerForm: RegisterComponent): Observable<RegisterComponent> {
    let url: string = "http://172.17.40.240:8080/user"
    return this.http.post<RegisterComponent>(url, JSON.stringify(registerForm), this.httpOptions).pipe(
      catchError((err) => {
        console.log("hay un error")
        console.error(err)
        return throwError(err)
      })
    )
  }
  //login
  login(creds:Credentials): Observable<LoginComponent> {
    let url: string = "http://172.17.40.240:8080/login"
   /* return this.http.post<LoginComponent>(url, JSON.stringify(loginForm), this.httpOptions).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )*/
    return this.http.post(url, creds, {observe: 'response'})
    .pipe(map((response: HttpResponse<any>) => {
      const body = response.body;
      const headers = response.headers;
      const bearerToken = headers.get('Authorization')!;
      const token = bearerToken.replace('Bearer ', '');
      localStorage.setItem('token', token);
      localStorage.setItem('username', creds.username);
      return body

    }
    ))
  }
  //get token
  getToken(){
    return localStorage.getItem('token')
  }
  getUserName(){
    return localStorage.getItem('username')
  }
  getRole(){
    return localStorage.getItem('role')
  }
  //get user by username
  getUserByUsername(username: string): Observable<any> {
    let url: string = "http://172.17.40.240:8080/userByUsername/" + username
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }

  isLogged(): boolean {
    if (localStorage.getItem('token')) {
      return true
    } else {
      return false
    }
  }
}
