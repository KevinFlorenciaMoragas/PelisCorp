import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Genre, Movies } from 'src/app/interfaces/interfaces.component';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  movies: Movies[] = []
  genres : Genre[] = []
  constructor(private http: MoviesService) { }
  
  getAllMovies() {
  this.http.movieByScoreDesc().subscribe(data => {
    console.log(data)
    this.movies = data as Movies[]
    console.log(this.movies)
  })
}
getAllGenres() {

  this.http.listAllGenres().subscribe(data => {
    console.log(data)
    this.genres = data as Genre[]
    console.log(this.movies)
  })
}
ngOnInit() {
  this.getAllMovies()
  this.getAllGenres()
}
getMovieName(){
  this.movieName= (<HTMLInputElement> document.getElementById("movieName")).value;
  console.log(this.movieName)
  return this.movieName;
}
movieName:string = "";
}