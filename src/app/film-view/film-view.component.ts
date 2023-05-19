import { Component } from '@angular/core';
import { Movies } from 'src/app/interfaces/interfaces.component';
import { Genre } from 'src/app/interfaces/interfaces.component';
import { MoviesService } from 'src/app/services/movies.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from 'src/app/interfaces/interfaces.component';

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.css']
})
export class FilmViewComponent {

  constructor(private http: MoviesService,private router:Router, private route: ActivatedRoute, private sanitizer: DomSanitizer) {

  }
  movieArray: any
  user : User[] = []
  movie: Movies = {
    id: 0,
    movieName: '',
    releaseDate: new Date(),
    plot: '',
    duration: 0,
    income: 0,
    score: 0,
    poster: [],
    trailer: '',
    favorites: [],
    director: [],
    actors: [],
    genre: [],
    awards: [],
    reviews: [],
    screenwritter: []
  }
  moviePrueba: Movies [] = []
  genres: Genre[] = []
  movieId: any
  id: any
  idUser: any
  trailer : any
  ngOnInit() {
    console.log("Estoy en ngOnInit")
    const movieIdParam = this.route.snapshot.paramMap.get('id');
    if (movieIdParam !== null) {
      this.id = +movieIdParam;
      this.idUser = +movieIdParam;
    }
    console.log(this.id)
    this.http.getMovieById(this.id).subscribe(data => {
      console.log(data)
      this.movie = data;
    //  this.movieArray = Array.from(this.movie)

     console.log(data.movie)
    },
    (error) => {
      this.router.navigate(['**'])
    })
  //  this.http.getUserById()
    this.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailer)
  }
  contenidoActual: string = '';
  cambiarContenido(boton: string) {
    this.contenidoActual = boton;
  }

}