import { Component } from '@angular/core';
import { Movies } from 'src/app/interfaces/interfaces.component';
import { MoviesService } from 'src/app/services/movies.service';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs'; 
import { OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 5000, noPause: true, showIndicators: false } }
  ]
  
})

export class PrincipalComponent implements OnInit{

  constructor(private http: MoviesService) { }

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
      this.movieRecommended = data as Movies
       console.log(this.movieRecommended)
    })
  

    this.displayedMovies = this.movies.slice(0, 3);
    this.initialLoad = false;
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
