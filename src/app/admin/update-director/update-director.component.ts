import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';
import { Director } from 'src/app/interfaces/interfaces.component';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-director',
  templateUrl: './update-director.component.html',
  styleUrls: ['./update-director.component.css']
})
export class UpdateDirectorComponent {
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

  Clic(datos: FormGroup) {
    console.log(datos.value);
  }

  directors: Director[] = []
  director: Director = {
    id: 0,
    name: '',
    lastName: '',
    photo: '',
  }
}
