import { Component } from '@angular/core';

import { Movies } from 'src/app/interfaces/interfaces.component';
import { MoviesService } from 'src/app/services/movies.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { OnInit } from '@angular/core';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit{

  constructor(private http: MoviesService) { }

  // firstImages = [
  //   { url: 'https://via.placeholder.com/200x300/ff0000', alt: 'Imagen 1' },
  //   { url: 'https://via.placeholder.com/200x300/00ff00', alt: 'Imagen 2' },
  //   { url: 'https://via.placeholder.com/200x300/0000ff', alt: 'Imagen 3' },
  //   { url: 'https://via.placeholder.com/200x300/ffff00', alt: 'Imagen 4' },
  //   { url: 'https://via.placeholder.com/200x300/ff00ff', alt: 'Imagen 5' },
  //   { url: 'https://via.placeholder.com/200x300/00ffff', alt: 'Imagen 6' },
  //   { url: 'https://via.placeholder.com/200x300/ff0000', alt: 'Imagen 7' },
  //   { url: 'https://via.placeholder.com/200x300/00ff00', alt: 'Imagen 8' },
  //   { url: 'https://via.placeholder.com/200x300/0000ff', alt: 'Imagen 9' },
  //   { url: 'https://via.placeholder.com/200x300/ffff00', alt: 'Imagen 10' },
  // ];

  // showFirstImages = true;

  movies: Movies[] = []

  youtubeApiLoaded = false;
   number: number = 0;
  displayedMovies: any[] = [];
  showLoadMoreButton: boolean = true;
  showLoadLessButton: boolean = false;
  initialLoad = true;
  showAllMovies: boolean = false;
  movieRecommended: Movies = {
    id: 0,
    movieName: '',
    releaseDate: new Date(),
    plot: '',
    duration: 0,
    income: 0,
    score: 0,
    poster: [],
    trailer: '',
    favorites: [],
    director: [],
    actors: [],
    genre: [],
    awards: [],
    reviews: [],
    screenwritter: []
  }
  
  ngOnInit(){
    if(!this.youtubeApiLoaded) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
      this.youtubeApiLoaded = true;
    }
    this.getAllMovies()
    this.getMovieRecommended()
    this.displayedMovies = this.movies.slice(0, 3);
    this.initialLoad = false;
  }
  
  getMovieRecommended() {
    let random : number = Math.floor(Math.random() * 28) + 1
    this.http.getMovieById(random).subscribe(data => {
      console.log(data)
      this.movieRecommended = data.movie as Movies
      console.log(this.movieRecommended)
    })
  }

  getAllMovies() {
    this.http.listAllMovies().subscribe(data => {
      this.number = data.length
      console.log(data)
      this.movies = data as Movies[]
      console.log(this.movies)
    })
  }

  obtenerDatos() {
    this.http.listAllMovies().subscribe((data: any[]) => {
      this.movies = data;
    });
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
