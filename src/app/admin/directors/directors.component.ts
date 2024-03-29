import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';
import { Actor, Director } from 'src/app/interfaces/interfaces.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.css']
})
export class DirectorsComponent {
  constructor(private http: MoviesService,private activatedRoute: ActivatedRoute) { }
  id: FormControl = new FormControl('', [Validators.minLength(1), Validators.maxLength(100)]);
  name: FormControl = new FormControl('', [Validators.minLength(1), Validators.maxLength(50)]);
  lastName: FormControl = new FormControl('',  [Validators.minLength(1), Validators.maxLength(50)]);
  photo: FormControl = new FormControl('', [Validators.minLength(1), Validators.maxLength(200)]);
  biography: FormControl = new FormControl('', [Validators.minLength(1), Validators.maxLength(400)]);
  birthPlace: FormControl = new FormControl('',  [Validators.minLength(1), Validators.maxLength(50)]);
  birthDate: FormControl = new FormControl('',  [Validators.minLength(1), Validators.maxLength(4)]);

  MyNewForm: FormGroup = new FormGroup({
  id: this.id,
  name: this.name,
  lastName: this.lastName,
  photo: this.photo,
  biography: this.biography,
  birthPlace: this.birthPlace,
  birthDate: this.birthDate
  });

  Clic(datos: FormGroup) {
    console.log(datos.value);
  }

  directors: Director[] = []
  director: Director = {
    id: 0,
    name: '',
    lastName: '',
    photo: '',
    biography: "",
    birthPlace: "",
    birthDate: 0
  }

  ngOnInit(){
    this.getAllDirectors()
  }

  getAllDirectors() {
    this.http.listAllDirectors().subscribe(data => {
      console.log(data)
      this.directors = data as Actor[]
      console.log(this.directors)
      })
  }

  deleteDirector(id: number) {
    this.http.deleteDirectorsById(id).subscribe(
      data => {
        console.log(data);
        this.getAllDirectors();
      },
      error => {
        console.log("Error al eliminar el actor", error);
        // Manejar el error de eliminación de actor
      }
    );
  }

  CreateDirector() {
    this.http.createDirector(this.MyNewForm.value).subscribe(data => {
      console.log(this.MyNewForm.value)
      this.getAllDirectors()
    })
  }
}
