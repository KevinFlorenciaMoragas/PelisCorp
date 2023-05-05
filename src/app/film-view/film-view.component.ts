import { Component } from '@angular/core';
import { Movies } from 'src/app/interfaces/interfaces.component';
import { Genre } from 'src/app/interfaces/interfaces.component';
import { MoviesService } from 'src/app/services/movies.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';
import { Actor, Director, Reviews, MovieReview, Screenwritter } from '../interfaces/interfaces/interfaces.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.css']
})
export class FilmViewComponent {
  constructor(private http: MoviesService, private route: ActivatedRoute) {

  } 
  movie: Movies = { 
   id: 0, movieName: '', 
   releaseDate: new Date(), 
   plot: '', duration: 0, 
   income: 0, 
   score: 0, 
   photo: '', 
   favorites: [], 
   director: [], 
   actors: [], 
   genres: [], 
   awards: [], 
   reviews: [], 
   screenwritters: [] 
 } 
 genres: Genre[] = [] 
 movieId: any 
 id: any 
 
 ngOnInit() {
   console.log("Estoy en ngOnInit") 
   const movieIdParam = this.route.snapshot.paramMap.get('id'); console.log(movieIdParam) 
   if (movieIdParam !== null) { 
     this.id = +movieIdParam; 
     console.log(this.id) 
   } 
   this.http.getMovieById(this.id).subscribe(data => { 
     this.movie = data; }) 
     //this.getAllMovies(), // this.getAllGenres() }
   }


  contenidoActual: string = '';

  cambiarContenido(boton: string) {
    this.contenidoActual = boton;
  }





}