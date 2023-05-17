import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Movies } from '../interfaces/interfaces.component';
import { HttpErrorResponse } from '@angular/common/http';
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

    let url: string = "http://172.17.40.233:8080/allMovies"

    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }

  listAllMoviesByTitle(title: string): Observable<any> {
    let url: string = "http://172.17.40.233:8080/movies/title/" + title
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  listAllMovieByTitleInput(title: string): Observable<any> {
    let url: string = "http://172.17.40.233:8080/movies/titleInput/" + title
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  getMovieById(id: number): Observable<any> {
    let url: string = "http://172.17.40.233:8080/movies/" + id;
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.log(err)
        return throwError(err)
      })
    )
  }
  listAllActors(): Observable<any> {
    let url: string = "http://172.17.40.233:8080/allActors"
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  listAllDirectors(): Observable<any> {
    let url: string = "http://172.17.40.233:8080/director"
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  getMovieByGenreId(id:number): Observable<any> {
    let url: string = "http://172.17.40.233:8080/movies/genre/" + id;
    return this.http.get<any>(url).pipe(
      catchError((err:HttpErrorResponse) => {
        if(err.status === 404){
          console.log("No se ha encontrado la pelicula")
        }
        return throwError(err)
      })
    )
  }
  listAllGenres(): Observable<any> {
    let url: string = "http://172.17.40.233:8080/genre"
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }

  movieByScoreDesc(): Observable<any> {
    let url: string = "http://172.17.40.233:8080/movies/topDesc"
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }

  listAllScreenWritter(): Observable<any> {
    let url: string = "http://172.17.40.233:8080/screenwritter"
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }

  listAllActor(): Observable<any> {
    let url: string = "http://172.17.40.233:8080/allActors"
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  listAllMovieReview(): Observable<any> {
    let url: string = "http://172.17.40.233:8080/movieReview"
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  listAllReview(): Observable<any> {
    let url: string = "http://172.17.40.233:8080/reviews"
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  

}
