import { Component } from '@angular/core';
import { Movies, Reviews } from 'src/app/interfaces/interfaces.component';
import { Genre } from 'src/app/interfaces/interfaces.component';
import { MoviesService } from 'src/app/services/movies.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from 'src/app/interfaces/interfaces.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  reviews: Reviews[] = []
  moviePrueba: Movies [] = []
  genres: Genre[] = []


  idMovie = this.route.snapshot.paramMap.get('id');
  id: number = +this.idMovie!;
  idUser: number|null = localStorage.getItem('id') ? +localStorage.getItem('id')! : null;
  trailer : any
  ngOnInit() {
    console.log("Estoy en ngOnInit")
    const movieIdParam = this.route.snapshot.paramMap.get('id');
    if (movieIdParam !== null) {
      this.id = +movieIdParam;
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
    this.getReviews()
    this.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailer)
  }
  contenidoActual: string = '';
  cambiarContenido(boton: string) {
    this.contenidoActual = boton;
  }
  getReviews() {
    this.http.listReviewByMovieId(this.id).subscribe(data => {
      this.reviews = data;
      console.log(data)
    })
  }
  postReview() {
    console.log(this.reviewForm.value)
    this.http.insertReviews(this.reviewForm.value).subscribe(respponse => {
      console.log(respponse)
    }, error => {
      if(error.status == 500){
        alert("Ya has realizado una review de esta pelicula")
      }
      console.log(error)
    })

  }
  text: FormControl = new FormControl<string | null>("", { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(50)] })
  averageRating: FormControl = new FormControl<number | null>(0, { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(100)] })

  reviewForm: FormGroup = new FormGroup({
    text: this.text,
    averageRating: this.averageRating,
    id_movie: new FormControl(this.id),
    id_user: new FormControl(this.idUser)
  })
}