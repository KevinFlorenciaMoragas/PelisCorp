import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import {  Movies } from 'src/app/interfaces/interfaces.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-movies-by-movie-name',
  templateUrl: './movies-by-movie-name.component.html',
  styleUrls: ['./movies-by-movie-name.component.css']
})
export class MoviesByMovieNameComponent {
  movies: Movies[] = []

  constructor(private http: MoviesService, private router: Router, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }
  id: any
  getAllMoviesByMovieName() {
    const genreIdParam = this.route.snapshot.paramMap.get('movieName');
    if (genreIdParam !== null) {
      this.id = +genreIdParam;
    }
    this.http.getMovieByGenreId(this.id).subscribe(data => {
      console.log(data)
      this.movies = data as Movies[]
      console.log(this.movies)
    })
  }

  
  ngOnInit() {
    this.getAllMoviesByMovieName()
  }

}
