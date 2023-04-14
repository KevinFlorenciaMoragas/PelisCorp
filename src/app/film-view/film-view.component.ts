import { Component } from '@angular/core';
import { Movies } from 'src/app/interfaces/interfaces.component';
import { MoviesService } from 'src/app/services/movies.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.css']
})
export class FilmViewComponent {
  constructor(private http: MoviesService) { }
  movies: Movies[] = []

  ngOnInit() {
    this.getAllMovies()
  }
  getAllMovies() {
    this.http.listAllMovies().subscribe(data => {
      console.log(data)
      this.movies = data as Movies[]
      console.log(this.movies)
    })
  }
}