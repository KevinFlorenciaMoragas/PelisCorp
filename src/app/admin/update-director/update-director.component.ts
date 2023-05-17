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

  ngOnInit() {
    this.getDirector()
  }

  getDirector() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.http.getDirectorById(id).subscribe(data => {
      console.log(data);
      this.director = data as Director; 
      console.log(this.director);
    });
  }

  onUpdateDirector() {
    const updatedDirector = this.MyNewForm.value;
    console.log(updatedDirector)
    const id = this.activatedRoute.snapshot.params['id'];
    this.http.updateDirector(updatedDirector).subscribe(result => {
      console.log('Director actualizado:', result);
      window.location.href = '/admin/directors';
      // Aquí puedes realizar alguna acción adicional, como actualizar la lista de usuarios
    }, error => {
      console.error('Error al actualizar el Director:', error);
    });
  }
}
