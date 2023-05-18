import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';
import { Awards } from 'src/app/interfaces/interfaces.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent {
  constructor(private http: MoviesService,private activatedRoute: ActivatedRoute) { }
  id: FormControl = new FormControl('', [Validators.minLength(1)]);
  name: FormControl = new FormControl('', [Validators.minLength(1), Validators.maxLength(200)]);
  festival: FormControl = new FormControl('',  [Validators.minLength(1), Validators.maxLength(200)]);

  MyNewForm: FormGroup = new FormGroup({
  id: this.id,
  name: this.name,
  festival: this.festival
  });


  awards: Awards[] = []
  award: Awards = {
    id: 0,
    name: '',
    festival: ''
  }

  ngOnInit(){
    this.getAllAwards()
  }

  getAllAwards() {
    this.http.listAllAwards().subscribe(data => {
      console.log(data)
      this.awards = data as Awards[]
      console.log(this.awards)
      })
  }

  deleteAward(id: number) {
    this.http.deleteAwardById(id).subscribe(
      data => {
        console.log(data);
        this.getAllAwards();
      },
      error => {
        console.log("Error al eliminar el actor", error);
        // Manejar el error de eliminación de actor
      }
    );
  }

  CreateAward() {
    this.http.createAward(this.MyNewForm.value).subscribe(data => {
      console.log(this.MyNewForm.value)
      this.getAllAwards()
    })
  }
}
