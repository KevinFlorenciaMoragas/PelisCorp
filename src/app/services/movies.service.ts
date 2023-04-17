import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  listAllMovies(): Observable<any> {
    let url: string = "http://localhost:8080/movies"
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }



}



