import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/interfaces/interfaces.component';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  movies: Movies[] = []
  constructor(private http: HttpClient) { }
  
  getAllMovies() {
  let url : string = "http://localhost:8080/movies"
  this.http.get(url).subscribe(data => {

    console.log(data)
    this.movies = data as Movies[]
    console.log(this.movies)
  })
}
ngOnInit() {
  this.getAllMovies()
}
}
