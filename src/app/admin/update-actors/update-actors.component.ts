import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';
import { Actor } from 'src/app/interfaces/interfaces.component';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-actors',
  templateUrl: './update-actors.component.html',
  styleUrls: ['./update-actors.component.css']
})
export class UpdateActorsComponent {
  constructor(private http: MoviesService, private activatedRoute: ActivatedRoute,private formBuilder: FormBuilder,private router: Router) { }
  id: FormControl = new FormControl('', [Validators.minLength(1), Validators.maxLength(100)]);
  name: FormControl = new FormControl('', [Validators.minLength(1), Validators.maxLength(50)]);
  lastName: FormControl = new FormControl('',  [Validators.minLength(1), Validators.maxLength(50)]);
  photo: FormControl = new FormControl('', [Validators.minLength(1), Validators.maxLength(200)]);

  MyNewForm: FormGroup = new FormGroup({
  id: this.id,
  name: this.name,
  lastName: this.lastName,
  photo: this.photo,
  });
  isDisabled: boolean = true;

  Clic(datos: FormGroup) {
    console.log(datos.value);
  }

  actors: Actor[] = []
  actor: Actor = {
    id: 0,
    name: '',
    lastName: '',
    photo: '',
  }

  ngOnInit() {
    this.getActor()
  }

  getActor() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.http.getActorById(id).subscribe(data => {
      console.log(data);
      this.actor = data as Actor; 
      console.log(this.actor);
    });
  }

  onUpdateActor() {
    const updatedUser = this.MyNewForm.value;
    console.log(updatedUser)
    const id = this.activatedRoute.snapshot.params['id'];
    this.http.updateActor(updatedUser).subscribe(result => {
      console.log('Actor actualizado:', result);
      window.location.href = '/admin/actors';
      // Aquí puedes realizar alguna acción adicional, como actualizar la lista de usuarios
    }, error => {
      console.error('Error al actualizar el Actor:', error);
    });
  }
}
