import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Genre, Movies } from 'src/app/interfaces/interfaces.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  movies: Movies[] = []
  genres : Genre[] = []
  search:string = ""
  constructor(private http: MoviesService,private router: Router) { }
  
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
searchMovie() {
  console.log("search")
  this.search = (document.getElementById("busqueda") as HTMLInputElement).value;
  console.log(this.search)
  if(this.search != null){
    this.http.listAllMoviesByTitle(this.search).subscribe(data => {
      this.movies = data;
      console.log(this.movies)
      this.router.navigate(['../movie-by-movie-name', this.search])
    })
  }else{

  }
}

}
