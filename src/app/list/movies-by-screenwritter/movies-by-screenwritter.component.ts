import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Movies } from 'src/app/interfaces/interfaces.component';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-by-screenwritter',
  templateUrl: './movies-by-screenwritter.component.html',
  styleUrls: ['./movies-by-screenwritter.component.css']
})
export class MoviesByScreenwritterComponent {
  constructor(private http: MoviesService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    this.getAllMoviesByScreenwritter()
  }
  movies: Movies[] = []
  id: any
  getAllMoviesByScreenwritter() {
    const genreIdParam = this.route.snapshot.paramMap.get('id');
    if (genreIdParam !== null) {
      this.id = genreIdParam;
    }
    this.http.listAllMoviesByScreenwritter(this.id).subscribe(data => {
      console.log(data)
      this.movies = data as Movies[]
      console.log(this.movies)
    })
  }
}
