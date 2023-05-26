import { Component,HostListener } from '@angular/core';
import { Movies, Reviews } from 'src/app/interfaces/interfaces.component';
import { Genre } from 'src/app/interfaces/interfaces.component';
import { MoviesService } from 'src/app/services/movies.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from 'src/app/interfaces/interfaces.component';
import { FormControl, FormGroup, Validators,AbstractControl} from '@angular/forms';



@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.css']
})
export class FilmViewComponent {

  constructor(private http: MoviesService,private router:Router, private route: ActivatedRoute, private sanitizer: DomSanitizer) {

  }
  displayedReviews: any[] = [];
  showLoadMoreButton: boolean = true;
  showLoadLessButton: boolean = false;
  initialLoad = true;
  showAllReviews: boolean = false;
  movieArray: any
  user : User[] = []
  movie: Movies = {
    id: 0,
    movieName: '',
    releaseDate: new Date(),
    plot: '',
    duration: 0,
    income: 0,
    photo:'',
    score: 0,
    trailer: '',
    poster: [],
    favorites: [],
    director: [],
    actors: [],
    genre: [],
    awards: [],
    reviews: [],
    screenwritter: [],
    banner: ''
  }
  reviews: Reviews [] = []
  moviePrueba: Movies [] = []
  genres: Genre[] = []
  usernameLocalStorage = localStorage.getItem('username')
  idMovie = this.route.snapshot.paramMap.get('id');
  id: number = +this.idMovie!;
  idUser: number|null = localStorage.getItem('id') ? +localStorage.getItem('id')! : null;
  trailer : any
  ngOnInit() {
    this.getReviews()
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

  getReviews() {
    console.log("get reviews" +this.id)
    this.http.listReviewByMovieId(this.id).subscribe(data => {
      this.reviews = data

      console.log(this.reviews)
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

  numberRangeaverageRating(campo: FormControl){
    if (campo.value !== null && (isNaN(campo.value) || campo.value < 0 || campo.value > 10)) {
      return { 'numberRange': true };
    }
  
    return null;
  }

  text: FormControl = new FormControl<string | null>("", { validators: [Validators.required, Validators.minLength(5), Validators.maxLength(50)] })
  averageRating: FormControl = new FormControl<number | null>(0, { validators: [Validators.required, Validators.min(0), Validators.max(10)] })

  reviewForm: FormGroup = new FormGroup({
    text: this.text,
    averageRating: this.averageRating,
    id_movie: new FormControl(this.id),
    id_user: new FormControl(this.idUser)
  })

  @HostListener('window:resize')

  onResize() {

    this.updatePlayerWidth();

  }

  playerWidth: number = 0;

  playerHeight: number = 0;

  updatePlayerWidth() {

    const screenWidth = window.innerWidth;

    // Puedes definir tus propias reglas para establecer el ancho en función del tamaño de la pantalla

    if (screenWidth > 1723) {

      this.playerWidth = 600;

      this.playerHeight = 400;

    } else if (screenWidth < 1027) {

      this.playerWidth = 300;

      this.playerHeight = 200;

    } else {

      this.playerWidth = 400;

      this.playerHeight = 300;

    }

  }


  loadMore() { 
    this.showAllReviews = true;
    const startIndex = this.displayedReviews.length;
    const endIndex = startIndex + 6; 
    this.displayedReviews = this.displayedReviews.concat(this.reviews.slice(startIndex, endIndex)); 
    if (endIndex >= this.reviews.length) { 
      this.showLoadMoreButton = false; 
      this.showLoadLessButton = true; 
    } 
    this.showAllReviews = true; 
  } loadLess() 
  { this.displayedReviews = this.reviews.slice(0, 3);
    this.showLoadMoreButton = true; 
    this.showLoadLessButton = false; 
  }

  

}
