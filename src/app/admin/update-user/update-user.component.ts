import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';
import { User } from 'src/app/interfaces/interfaces.component';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  constructor(private http: MoviesService,private activatedRoute: ActivatedRoute) { }
  id: FormControl = new FormControl('', [Validators.minLength(1), Validators.maxLength(100)]);
  username: FormControl = new FormControl('', [Validators.minLength(1), Validators.maxLength(50)]);
  email: FormControl = new FormControl('',  [Validators.minLength(1), Validators.maxLength(50)]);
  password: FormControl = new FormControl('',  [Validators.minLength(1), Validators.maxLength(100)]);
  avatar: FormControl = new FormControl('', [Validators.minLength(0), Validators.maxLength(200)]);
  role: FormControl = new FormControl('', [Validators.minLength(1), Validators.maxLength(200)]);

  MyNewForm: FormGroup = new FormGroup({
  id: this.id,
  username: this.username,
  email: this.email,
  password: this.password,
  avatar: this.avatar,
  role: this.role
  });

  Clic(datos: FormGroup) {
    console.log(datos.value);
  }

  users: User[] = []
  user: User = {
    id: 0,
    username: '',
    email: '',
    password: '',
    avatar: '',
    role:''
  }

  ngOnInit() {
    this.getUser()
  }

  getUser() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.http.getUserById(id).subscribe(data => {
      console.log(data);
      this.user = data as User; 
      console.log(this.user);
    });
  }

  onUpdateUser() {
    const updatedUser = this.MyNewForm.value;
    console.log(updatedUser)
    const id = this.activatedRoute.snapshot.params['id'];
    this.http.updateUser(updatedUser).subscribe(result => {
      console.log('User actualizado:', result);
      window.location.href = '/admin/users';
      // Aquí puedes realizar alguna acción adicional, como actualizar la lista de usuarios
    }, error => {
      console.error('Error al actualizar el User:', error);
    });
  }
}
