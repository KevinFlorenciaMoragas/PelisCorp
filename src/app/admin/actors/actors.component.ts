import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';
import { Actor } from 'src/app/interfaces/interfaces.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent {
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

  actors: Actor[] = []
  actor: Actor = {
    id: 0,
    name: '',
    lastName: '',
    photo: '',
    biography: "",
    birthPlace: "",
    birthDate: 0
  }

  ngOnInit(){
    this.getAllActors()
  }

  getAllActors() {
    this.http.listAllActor().subscribe(data => {
      console.log(data)
      this.actors = data as Actor[]
      console.log(this.actors)
      })
  }

  deleteActor(id: number) {
    this.http.deleteActorById(id).subscribe(
      data => {
        console.log(data);
        this.getAllActors();
      },
      error => {
        console.log("Error al eliminar el actor", error);
        // Manejar el error de eliminación de actor
      }
    );
  }

  CreateActor() {
    this.http.createActor(this.MyNewForm.value).subscribe(data => {
      console.log(this.MyNewForm.value)
      this.getAllActors()
    })
  }
}
