import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Movies } from 'src/app/interfaces/interfaces/interfaces.component';
import { HttpClient } from '@angular/common/http';
import { MoviesService } from 'src/app/services/movies.service';
@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.css']
})
export class FilmViewComponent implements OnInit {
  movie: Movies[] = []
  constructor(private http: MoviesService) {
  }
  getMovie(id: number) {
    return this.http.getMovieById(id).subscribe(data => {
      this.movie = data as Movies[]
      console.log(data)
    }

    )
  }

  ngOnInit() {
    // this.getMovieById(id)
  }
}
