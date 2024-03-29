import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/interfaces.component';
import { Genre } from 'src/app/interfaces/interfaces.component';
import { MoviesService } from 'src/app/services/movies.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actor } from 'src/app/interfaces/interfaces.component';
import { Reviews } from 'src/app/interfaces/interfaces.component';
import { Poster } from 'src/app/interfaces/interfaces.component';

@Component({
  selector: 'app-comunity',
  templateUrl: './comunity.component.html',
  styleUrls: ['./comunity.component.css']
})
export class ComunityComponent implements OnInit {
  usernameLocalStorage = localStorage.getItem('username')
  movies: Movies[] = [];
  genres: Genre[] = [];
  actor: Actor[] = [];
  reviews: Reviews[] = [];
  poster: Poster[] = [];
  displayedMovies: any[] = [];
  showLoadMoreButton: boolean = true;
  showLoadLessButton: boolean = false;
  initialLoad = true;
  showAllMovies: boolean = false;
  contenidoActual: string = 'boton1';

  constructor(private http: MoviesService) {}

  ngOnInit() {
    this.getAllMovies();
    this.getAllGenres();
    this.getAllActor();
  }

  getAllMovies() {
    this.http.listAllMovies().subscribe(data => {
      console.log(data);
      this.movies = data as Movies[];
      console.log(this.movies);
    });
  }

  getAllGenres() {
    this.http.listAllGenres().subscribe(data => {
      console.log(data);
      this.genres = data as Genre[];
      console.log(this.genres);
    });
  }

  getAllActor() {
    this.http.listAllActor().subscribe(data => {
      console.log(data);
      this.actor = data as Actor[];
      console.log(this.actor);
    });
  }

  getAllReviews() {
    this.http.listAllReview().subscribe(data => {
      console.log(data);
      this.reviews = data as Reviews[];
      console.log(this.reviews);
    });
  }

  cambiarContenido(boton: string) {
    this.contenidoActual = boton;
  }

  loadMore() {
    const startIndex = this.displayedMovies.length;
    const endIndex = startIndex + 3;
    this.displayedMovies = this.displayedMovies.concat(this.movies.slice(startIndex, endIndex));
    if (endIndex >= this.movies.length) {
      this.showLoadMoreButton = false;
      this.showLoadLessButton = true;
    }
    this.showAllMovies = true;
  }

  loadLess() {
    this.displayedMovies = this.movies.slice(0, 3);
    this.showLoadMoreButton = true;
    this.showLoadLessButton = false;
  }
}