import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Movies } from 'src/app/interfaces/interfaces.component';
import { DomSanitizer } from '@angular/platform-browser';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-by-actor',
  templateUrl: './movies-by-actor.component.html',
  styleUrls: ['./movies-by-actor.component.css']
})
export class MoviesByActorComponent implements OnInit {
  constructor(private http: MoviesService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }
  ngOnInit(): void {
    this.getAllMoviesByActor()
  }
  movies: Movies[] = []
  id: any
  getAllMoviesByActor() {
    const genreIdParam = this.route.snapshot.paramMap.get('id');
    if (genreIdParam !== null) {
      this.id = genreIdParam;
    }
    this.http.listAllMoviesByActor(this.id).subscribe(data => {
      console.log(data)
      this.movies = data as Movies[]
      console.log(this.movies)
    })
  }
}
