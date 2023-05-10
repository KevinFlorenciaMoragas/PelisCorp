import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/interfaces/interfaces.component';
import { MovieReview } from '../../../app/interfaces/interfaces/interfaces.component';
import { Actor } from '../../../app/interfaces/interfaces/interfaces.component';
import { Genre } from 'src/app/interfaces/interfaces.component';
import { Reviews } from '../../../app/interfaces/interfaces/interfaces.component';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  constructor(private http: MoviesService) { }
  movies: Movies[] = []
  genres: Genre[] = []
  actor: Actor[] = []
  movieReview: MovieReview[] = []
  reviews: Reviews[] = []


  ngOnInit() {
    this.getAllMovies(),
    this.getAllGenres(),
    this.getAllActor(),
    this.getAllMovieReview()
  }
  getAllMovies() {
    this.http.listAllMovies().subscribe(data => {
      console.log(data)
      this.movies = data as Movies[]
      console.log(this.movies)
    })
  }

  getAllGenres() {
    this.http.listAllGenres().subscribe(data => {
      console.log(data)
      this.genres = data as Genre[]
      console.log(this.genres)
    })
  }

  getAllActor() {
    this.http.listAllActor().subscribe(data => {
      console.log(data)
      this.actor = data as Actor[]
      console.log(this.actor)
    })
  }
  getAllMovieReview() {
    this.http.listAllMovieReview().subscribe(data => {
      console.log(data)
      this.movieReview = data as MovieReview[]
      console.log(this.movieReview)
    })
  }
  getAllReviews() {
    this.http.listAllReview().subscribe(data => {
      console.log(data)
      this.reviews = data as Reviews[]
      console.log(this.reviews)
    })
  }


  contenidoActual: string = '';

  cambiarContenido(boton: string) {
    this.contenidoActual = boton;
  }





}