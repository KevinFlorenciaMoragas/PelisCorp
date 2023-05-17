import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ActorsComponent } from '../admin/actors/actors.component';
import { DirectorsComponent } from '../admin/directors/directors.component';

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
  getMovieById(id: number): Observable<any> {
    let url: string = "http://172.17.40.233:8080/movies/" + id;
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.log(err)
        return throwError(err)
      })
    )
  }
  listAllDirectors(): Observable<any> {
    let url: string = "http://172.17.40.233:8080/allDirectors"
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
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
  getActorById(id: number): Observable<any> {
    let url: string = "http://172.17.40.233:8080/actors/" +id;
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  getDirectorById(id: number): Observable<any> {
    let url: string = "http://172.17.40.233:8080/director/" +id;
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  deleteActorById(id: number): Observable<any> {
    let url: string = "http://172.17.40.233:8080/actors/" + id;
    return this.http.delete<any>(url).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(err);
      })
    );
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
  listAllAwards(): Observable<any> {
    let url: string = "http://172.17.40.233:8080/awards"
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

  listmoviesAsc(){
    let url: string = "http://172.17.40.233:8080/movies/topDesc"
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
        })
        )
  }

  deleteMovieById(id: number): Observable<any> {
    let url: string = "http://172.17.40.233:8080/movies/" + id;
    return this.http.delete<any>(url).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(err);
      })
    );
  }

  updateMovie(movie: any): Observable<any> {
    console.log(movie.movie.id)
    const url = "http://172.17.40.233:8080/movies/" + movie.movie.id;
    return this.http.put<any>(url, movie, this.httpOptions).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  updateActor(actor: any): Observable<any> {
    console.log(actor.id)
    const url = "http://172.17.40.233:8080/actors/" + actor.id;
    return this.http.put<any>(url, actor, this.httpOptions).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  updateDirector(director: any): Observable<any> {
    console.log(director.id)
    const url = "http://172.17.40.233:8080/director/" + director.id;
    return this.http.put<any>(url, director, this.httpOptions).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  createActor(MyNewForm: ActorsComponent):Observable<ActorsComponent>{
    let url:string = "http://172.17.40.233:8080/actors"
    console.log(MyNewForm)
    return this.http.post<ActorsComponent>(url,JSON.stringify(MyNewForm),this.httpOptions).pipe(
      catchError((err) =>{
        console.log("hay un error")
        console.error(err)
        return throwError(err)
      })
      )
  }

  createDirector(MyNewForm: DirectorsComponent):Observable<DirectorsComponent>{
    let url:string = "http://172.17.40.233:8080/director"
    console.log(MyNewForm)
    return this.http.post<DirectorsComponent>(url,JSON.stringify(MyNewForm),this.httpOptions).pipe(
      catchError((err) =>{
        console.log("hay un error")
        console.error(err)
        return throwError(err)
      })
      )
  }

}

