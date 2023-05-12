import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/interfaces.component';
import { Actor } from 'src/app/interfaces/interfaces.component';
import { Genre } from 'src/app/interfaces/interfaces.component';
import { Reviews } from 'src/app/interfaces/interfaces.component';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css'],
})
export class SeriesComponent {
  constructor(private http: MoviesService) {}
  movies: Movies[] = [];
  genres: Genre[] = [];
  actor: Actor[] = [];

  reviews: Reviews[] = [];

  ngOnInit() {
    this.getAllMovies(),
      this.getAllGenres(),
      this.getAllActor();
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
