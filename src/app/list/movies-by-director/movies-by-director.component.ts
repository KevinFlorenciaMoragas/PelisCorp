import { Component } from '@angular/core';
import { Movies } from 'src/app/interfaces/interfaces.component';
import { MoviesService } from 'src/app/services/movies.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Genre } from 'src/app/interfaces/interfaces.component';
import { Actor } from 'src/app/interfaces/interfaces.component';
import { OnInit } from '@angular/core';
import { Director } from 'src/app/interfaces/interfaces.component';
@Component({
  selector: 'app-movies-by-director',
  templateUrl: './movies-by-director.component.html',
  styleUrls: ['./movies-by-director.component.css']
})
export class MoviesByDirectorComponent implements OnInit {
  movies: Movies[] = []
  constructor(private http: MoviesService, private router: Router, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }
  id: any
  idDirector: any
  director: Director = {
    id: 0,
    name: "",
    lastName: "",
    photo: "",
    biography: "",
    birthPlace: "",
    birthDate: 0
  }
  ngOnInit(): void {
    this.getAllMoviesByDirector()

  }
  getAllMoviesByDirector() {
    const genreIdParam = this.route.snapshot.paramMap.get('id');
    if (genreIdParam !== null) {
      this.id = genreIdParam;
      this.idDirector = genreIdParam;
    }
    this.http.listAllMoviesByDirector(this.id).subscribe(data => {
      console.log(data)
      this.movies = data as Movies[]
      console.log(this.movies)
    })
    this.http.getDirectorById(this.idDirector).subscribe(directorData => {
      console.log(directorData)
      this.director = directorData as Director
      console.log(this.director)

    },
      (error) => {
        this.router.navigate(['**'])
      }
    )


  }
}
