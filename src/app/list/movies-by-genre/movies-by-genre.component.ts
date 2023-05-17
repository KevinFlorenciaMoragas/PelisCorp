import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Genre, Movies } from 'src/app/interfaces/interfaces.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-movies-by-genre',
  templateUrl: './movies-by-genre.component.html',
  styleUrls: ['./movies-by-genre.component.css']
})
export class MoviesByGenreComponent implements OnInit {
  movies: Movies[] = []
  genres: Genre[] = []
  constructor(private http: MoviesService, private router: Router, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }
  id: any
  getAllMoviesByGenre() {
    const genreIdParam = this.route.snapshot.paramMap.get('id');
    if (genreIdParam !== null) {
      this.id = +genreIdParam;
    }
    this.http.getMovieByGenreId(this.id).subscribe(data => {
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
    this.getAllMoviesByGenre()
    this.getAllGenres()
  }

}
