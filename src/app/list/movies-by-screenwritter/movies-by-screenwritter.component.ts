import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Movies, Screenwritter } from 'src/app/interfaces/interfaces.component';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-by-screenwritter',
  templateUrl: './movies-by-screenwritter.component.html',
  styleUrls: ['./movies-by-screenwritter.component.css']
})
export class MoviesByScreenwritterComponent {
  constructor(private http: MoviesService, private route: ActivatedRoute, private sanitizer: DomSanitizer,private router: Router) { }
  ngOnInit(): void {
    this.getAllMoviesByScreenwritter()
  }
  movies: Movies[] = []
  id: any
  idScreenwritter: any
  screenwritter: Screenwritter = {
    id: 0,
    name: "",
    lastName: "",
    photo: "",
  }
  getAllMoviesByScreenwritter() {
    const genreIdParam = this.route.snapshot.paramMap.get('id');
    if (genreIdParam !== null) {
      this.id = genreIdParam;
    }
    this.http.listAllMoviesByScreenwritter(this.id).subscribe(data => {
      console.log(data)
      this.movies = data as Movies[]
      console.log(this.movies)
    },
    (error) => {
      this.router.navigate(['**'])
    })
    this.http.getScreenwritterById(this.id).subscribe(screenwritterData => {
      console.log(screenwritterData)
      this.screenwritter = screenwritterData as Screenwritter
      console.log(this.screenwritter)
    },
    (error) => {
      this.router.navigate(['**'])
    }
    )
  }
}
