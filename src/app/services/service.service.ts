import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { RegisterComponent } from '../user/register/register.component';
import { LoginComponent } from '../user/login/login.component';
import { CookieService } from 'ngx-cookie-service';
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
    let url: string = "http://localhost:8080/user"
    return this.http.post<RegisterComponent>(url, JSON.stringify(registerForm), this.httpOptions).pipe(
      catchError((err) => {
        console.log("hay un error")
        console.error(err)
        return throwError(err)
      })
    )
  }
  //login
  login(loginForm: LoginComponent): Observable<LoginComponent> {
    let url: string = "http://localhost:8080/login"
    return this.http.post<LoginComponent>(url, JSON.stringify(loginForm), this.httpOptions).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
}
