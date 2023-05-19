import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';
import { User } from 'src/app/interfaces/interfaces.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor(private http: MoviesService,private activatedRoute: ActivatedRoute) { }
  id: FormControl = new FormControl('', [Validators.minLength(1), Validators.maxLength(100)]);
  username: FormControl = new FormControl('', [Validators.minLength(1), Validators.maxLength(50)]);
  email: FormControl = new FormControl('',  [Validators.minLength(1), Validators.maxLength(50)]);
  password: FormControl = new FormControl('',  [Validators.minLength(1), Validators.maxLength(50)]);
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

  ngOnInit(){
    this.getAllUsers()
  }

  getAllUsers() {
    this.http.listAllUsers().subscribe(data => {
      console.log(data)
      this.users = data as User[]
      console.log(this.users)
      })
  }

  deleteUser(id: number) {
    this.http.deleteUserById(id).subscribe(
      data => {
        console.log(data);
        this.getAllUsers();
      },
      error => {
        console.log("Error al eliminar el user", error);
        // Manejar el error de eliminación de actor
      }
    );
  }

  CreateUser() {
    this.http.createUser(this.MyNewForm.value).subscribe(data => {
      console.log(this.MyNewForm.value)
      this.getAllUsers()
    })
  }
}
