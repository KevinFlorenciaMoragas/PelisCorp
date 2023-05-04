import { Component } from '@angular/core';
import { Movies } from 'src/app/interfaces/interfaces.component';
import { Genre } from 'src/app/interfaces/interfaces.component';
import { MoviesService } from 'src/app/services/movies.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';
import { Actor } from '../interfaces/interfaces/interfaces.component';
import { MovieReview } from '../interfaces/interfaces/interfaces.component';
import { Reviews } from '../interfaces/interfaces/interfaces.component';
@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.css'],
})
export class FilmViewComponent {
  constructor(private http: MoviesService) {}
  movies: Movies[] = [];
  genres: Genre[] = [];
  actor: Actor[] = [];
  movieReview: MovieReview[] = [];
  reviews: Reviews[] = [];

  ngOnInit() {
    this.getAllMovies(),
      this.getAllGenres(),
      this.getAllActor(),
      this.getAllMovieReview();
  }
  getAllMovies() {
    this.http.listAllMovies().subscribe((data) => {
      console.log(data);
      this.movies = data as Movies[];
      console.log(this.movies);
    });
  }

  getAllGenres() {
    this.http.listAllGenres().subscribe((data) => {
      console.log(data);
      this.genres = data as Genre[];
      console.log(this.genres);
    });
  }

  getAllActor() {
    this.http.listAllActor().subscribe((data) => {
      console.log(data);
      this.actor = data as Actor[];
      console.log(this.actor);
    });
  }
  getAllMovieReview() {
    this.http.listAllMovieReview().subscribe((data) => {
      console.log(data);
      this.movieReview = data as MovieReview[];
      console.log(this.movieReview);
    });
  }
  getAllReviews() {
    this.http.listAllReview().subscribe((data) => {
      console.log(data);
      this.reviews = data as Reviews[];
      console.log(this.reviews);
    });
  }

  contenidoActual: string = '';

  cambiarContenido(boton: string) {
    this.contenidoActual = boton;
  }
}
