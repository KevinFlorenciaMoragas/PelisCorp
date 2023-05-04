import { Component } from '@angular/core';
import { Movies } from 'src/app/interfaces/interfaces.component';
import { MoviesService } from 'src/app/services/movies.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})

export class PrincipalComponent implements OnInit{

  constructor(private http: MoviesService) { }

  movies: any[] = [
    {
      photo:'../../../assets/img/interestelar.jpg',
    },
    {
      photo:'../../../assets/img/interestelar.jpg',
    }
  ]

  ngOnInit(){
    
  }

  /*
  getAllMovies() {
    this.http.listAllMovies().subscribe(data => {
      console.log(data)
      this.movies = data as Movies[]
      console.log(this.movies)
    })
  }

  obtenerDatos() {
    this.http.listAllMovies().subscribe((data: any[]) => {
      this.movies = data;
    });
  }*/



}
