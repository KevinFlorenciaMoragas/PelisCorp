import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Movies } from '../interfaces/interfaces.component';
import { DirectorsComponent } from '../admin/directors/directors.component';
import { ActorsComponent } from '../admin/actors/actors.component';
import { HttpErrorResponse } from '@angular/common/http';
import { FilmViewComponent } from '../film-view/film-view.component';
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

    let url: string = "http://localhost:8080/allMovies"

    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  updateMovie(movie: any): Observable<any> {
    console.log(movie.movie.id)
    const url = "http://localhost:8080/movies/" + movie.movie.id;
    return this.http.put<any>(url, movie, this.httpOptions).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
  listAllUsers(): Observable<any> {
    let url: string = "http://localhost:8080/user"
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  createUser(MyNewForm: ActorsComponent):Observable<ActorsComponent>{
    let url:string = "http://localhost:8080/user"
    console.log(MyNewForm)
    return this.http.post<ActorsComponent>(url,JSON.stringify(MyNewForm),this.httpOptions).pipe(
      catchError((err) =>{
        console.log("hay un error")
        console.error(err)
        return throwError(err)
      })
      )
  }
  getUserById(id: number): Observable<any> {
    let url: string = "http://localhost:8080/user/" +id;
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  updateUser(user: any): Observable<any> {
    console.log(user)
    const url = "http://localhost:8080/user/" + user.id;
    return this.http.put<any>(url, user, this.httpOptions).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
  deleteUserById(id: number): Observable<any> {
    let url: string = "http://localhost:8080/user/" + id;
    return this.http.delete<any>(url).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(err);
      })
    );
  }
  listAllMoviesByDirector(id: number): Observable<any> {
    let url: string = "http://localhost:8080/moviesByDirector/" + id
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  getDirectorById(id: number): Observable<any> {
    let url: string = "http://localhost:8080/director/" +id;
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  updateDirector(director: any): Observable<any> {
    console.log(director.id)
    const url = "http://localhost:8080/director/" + director.id;
    return this.http.put<any>(url, director, this.httpOptions).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
  createDirector(MyNewForm: DirectorsComponent):Observable<DirectorsComponent>{
    let url:string = "http://localhost:8080/director"
    console.log(MyNewForm)
    return this.http.post<DirectorsComponent>(url,JSON.stringify(MyNewForm),this.httpOptions).pipe(
      catchError((err) =>{
        console.log("hay un error")
        console.error(err)
        return throwError(err)
      })
      )
  }
  deleteDirectorsById(id: number): Observable<any> {
    let url: string = "http://localhost:8080/director/" + id;
    return this.http.delete<any>(url).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(err);
      })
    );
  }
  listAllMoviesByTitle(title: string): Observable<any> {
    let url: string = "http://localhost:8080/moviesByMovieName/" + title
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  listAllMoviesByActor(id: number): Observable<any> {
    let url: string = "http://localhost:8080/moviesByActor/" + id
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  getActorById(id: number): Observable<any> {
    let url: string = "http://localhost:8080/actors/" +id;
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  updateActor(actor: any): Observable<any> {
    console.log(actor.id)
    const url = "http://localhost:8080/actors/" + actor.id;
    return this.http.put<any>(url, actor, this.httpOptions).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
  listAllMoviesByScreenwritter(id: number): Observable<any> {
    let url: string = "http://localhost:8080/moviesByScreenwritter/" + id
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }

  listAllMovieByTitleInput(title: string): Observable<any> {
    let url: string = "http://localhost:8080/movies/titleInput/" + title
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  getMovieById(id: number): Observable<any> {
    let url: string = "http://localhost:8080/movies/" + id;
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.log(err)
        return throwError(err)
      })
    )
  }
  listAllActors(): Observable<any> {
    let url: string = "http://localhost:8080/allActors"
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  listAllDirectors(): Observable<any> {
    let url: string = "http://localhost:8080/allDirectors"
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  getMovieByGenreId(id:number): Observable<any> {
    let url: string = "http://localhost:8080/movies/genre/" + id;
    return this.http.get<any>(url).pipe(
      catchError((err:HttpErrorResponse) => {
        if(err.status === 404){
          console.log("No se ha encontrado la pelicula")
        }
        return throwError(err)
      })
    )
  }
  getScreenwritterById(id: number): Observable<any> {
    let url: string = "http://localhost:8080/screenwritter/" + id;
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.log(err)
        return throwError(err)
      })
    )
  }
  getGenreById(id:number): Observable<any> {
    let url: string = "http://localhost:8080/genre/" + id
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  listAllGenres(): Observable<any> {
    let url: string = "http://localhost:8080/genre"
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }

  movieByScoreDesc(): Observable<any> {
    let url: string = "http://localhost:8080/movies/topDesc"
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }

  listAllScreenWritter(): Observable<any> {
    let url: string = "http://localhost:8080/screenwritter"
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }

  listAllActor(): Observable<any> {
    let url: string = "http://localhost:8080/allActors"
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  deleteActorById(id: number): Observable<any> {
    let url: string = "http://localhost:8080/actors/" + id;
    
    return this.http.delete<any>(url).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(err);
      })
    );
  }
  createActor(MyNewForm: ActorsComponent):Observable<ActorsComponent>{
    let url:string = "http://localhost:8080/actors"
    console.log(MyNewForm)
    return this.http.post<ActorsComponent>(url,JSON.stringify(MyNewForm),this.httpOptions).pipe(
      catchError((err) =>{
        console.log("hay un error")
        console.error(err)
        return throwError(err)
      })
      )
  }
  listAllMovieReview(): Observable<any> {
    let url: string = "http://localhost:8080/movieReview"
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  listAllReview(): Observable<any> {
    let url: string = "http://localhost:8080/reviews"
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  listReviewByMovieId(id: number): Observable<any> {
    let url: string = "http://localhost:8080/reviews/movies/" + id
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.log(err)
        return throwError(err)
      })
    )
  }
  insertReviews(MyNewForm: FilmViewComponent):Observable<FilmViewComponent>{
    let url:string = "http://localhost:8080/movies/reviews/" 
    console.log(MyNewForm)
    return this.http.post<FilmViewComponent>(url,JSON.stringify(MyNewForm),this.httpOptions).pipe(
      catchError((err) =>{
        console.log("hay un error")
        console.error(err)
        return throwError(err)
      })
      )
  }
  
  deleteMovieById(id: number): Observable<any> {
    let url: string = "http://localhost:8080/movies/" + id;
    return this.http.delete<any>(url).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(err);
      })
    );
  }
  listAllAwards(): Observable<any> {
    let url: string = "http://localhost:8080/awards"
    return this.http.get<any>(url).pipe(
      catchError((err) => {
        console.error(err)
        return throwError(err)
      })
    )
  }
  deleteAwardById(id: number): Observable<any> {
    let url: string = "http://localhost:8080/awards/" + id;
    
    return this.http.delete<any>(url).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(err);
      })
    );
  }
  createAward(MyNewForm: ActorsComponent):Observable<ActorsComponent>{
    let url:string = "http://localhost:8080/awards"
    console.log(MyNewForm)
    return this.http.post<ActorsComponent>(url,JSON.stringify(MyNewForm),this.httpOptions).pipe(
      catchError((err) =>{
        console.log("hay un error")
        console.error(err)
        return throwError(err)
      })
      )
  }

  createMovie(MyNewForm: FilmViewComponent):Observable<FilmViewComponent>{
    let url:string = "http://localhost:8080/allDataMovies"
    console.log(MyNewForm)
    return this.http.post<FilmViewComponent>(url,JSON.stringify(MyNewForm),this.httpOptions).pipe(
      catchError((err) =>{
        console.log("hay un error")
        console.error(err)
        return throwError(err)
      })
      )
    }
}

