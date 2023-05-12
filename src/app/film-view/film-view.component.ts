import { Component } from '@angular/core';
import { Movies } from 'src/app/interfaces/interfaces.component';
import { Genre } from 'src/app/interfaces/interfaces.component';
import { MoviesService } from 'src/app/services/movies.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';
import { Actor, Director, Reviews, MovieReview, Screenwritter } from '../interfaces/interfaces/interfaces.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-view',
  templateUrl: './film-view.component.html',
  styleUrls: ['./film-view.component.css']
})
export class FilmViewComponent {
  constructor(private http: MoviesService, private route: ActivatedRoute) {

  } 

 genres: Genre[] = [] 
 movieId: any 
 id: any 
 
 ngOnInit() {

   }


  contenidoActual: string = '';

  cambiarContenido(boton: string) {
    this.contenidoActual = boton;
  }





}