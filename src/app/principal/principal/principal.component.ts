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
  displayedMovies: any[] = [];
  showLoadMoreButton: boolean = true;
  showLoadLessButton: boolean = false;
  initialLoad = true;
  showAllMovies: boolean = false;
  movie: Movies = {
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
    this.getAllMovies()
    this.displayedMovies = this.movies.slice(0, 3);
    this.initialLoad = false;
  }
  
  getAllMovies() {
    this.http.listAllMovies().subscribe(data => {
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




  // showAllMovies() {
  //   this.displayedMovies = this.movies;
  //   this.showLoadMoreButton = false;
  // }
  


}
