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

<<<<<<< Updated upstream
    let url: string = "http://172.17.40.233:8080/allMovies"
=======
    let url: string = "http://172.17.40.240:8080/allMovies"
>>>>>>> Stashed changes

    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }

  listAllMoviesByTitle(title: string): Observable<any> {
<<<<<<< Updated upstream
    let url: string = "http://172.17.40.233:8080/movies/title/" + title
=======
    let url: string = "http://172.17.40.240:8080/movies/title/" + title
>>>>>>> Stashed changes
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  listAllMovieByTitleInput(title: string): Observable<any> {
<<<<<<< Updated upstream
    let url: string = "http://172.17.40.233:8080/movies/titleInput/" + title
=======
    let url: string = "http://172.17.40.240:8080/movies/titleInput/" + title
>>>>>>> Stashed changes
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  getMovieById(id: number): Observable<any> {
<<<<<<< Updated upstream
    let url: string = "http://172.17.40.233:8080/movies/" + id;
=======
    let url: string = "http://172.17.40.240:8080/movies/" + id;
>>>>>>> Stashed changes
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.log(err)
        return throwError(err)
      })
    )
  }
  listAllActors(): Observable<any> {
<<<<<<< Updated upstream
    let url: string = "http://172.17.40.233:8080/allActors"
=======
    let url: string = "http://172.17.40.240:8080/allActors"
>>>>>>> Stashed changes
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  listAllDirectors(): Observable<any> {
<<<<<<< Updated upstream
    let url: string = "http://172.17.40.233:8080/director"
=======
    let url: string = "http://172.17.40.240:8080/director"
>>>>>>> Stashed changes
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  getMovieByGenreId(id:number): Observable<any> {
<<<<<<< Updated upstream
    let url: string = "http://172.17.40.233:8080/movies/genre/" + id;
=======
    let url: string = "http://172.17.40.240:8080/movies/genre/" + id;
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    let url: string = "http://172.17.40.233:8080/genre"
=======
    let url: string = "http://172.17.40.240:8080/genre"
>>>>>>> Stashed changes
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }

  movieByScoreDesc(): Observable<any> {
<<<<<<< Updated upstream
    let url: string = "http://172.17.40.233:8080/movies/topDesc"
=======
    let url: string = "http://172.17.40.240:8080/movies/topDesc"
>>>>>>> Stashed changes
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }

  listAllScreenWritter(): Observable<any> {
<<<<<<< Updated upstream
    let url: string = "http://172.17.40.233:8080/screenwritter"
=======
    let url: string = "http://172.17.40.240:8080/screenwritter"
>>>>>>> Stashed changes
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }

  listAllActor(): Observable<any> {
<<<<<<< Updated upstream
    let url: string = "http://172.17.40.233:8080/allActors"
=======
    let url: string = "http://172.17.40.240:8080/allActors"
>>>>>>> Stashed changes
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  listAllMovieReview(): Observable<any> {
<<<<<<< Updated upstream
    let url: string = "http://172.17.40.233:8080/movieReview"
=======
    let url: string = "http://172.17.40.240:8080/movieReview"
>>>>>>> Stashed changes
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  listAllReview(): Observable<any> {
<<<<<<< Updated upstream
    let url: string = "http://172.17.40.233:8080/reviews"
=======
    let url: string = "http://172.17.40.240:8080/reviews"
>>>>>>> Stashed changes
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
<<<<<<< Updated upstream
  
=======

>>>>>>> Stashed changes

}

