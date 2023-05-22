import { Component } from '@angular/core';
import { Awards } from 'src/app/interfaces/interfaces.component';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';
import { Actor } from 'src/app/interfaces/interfaces.component';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-award',
  templateUrl: './update-award.component.html',
  styleUrls: ['./update-award.component.css']
})
export class UpdateAwardComponent {
  constructor(private http: MoviesService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { 

  } 
  id: FormControl = new FormControl('', [Validators.minLength(1), Validators.maxLength(100)]); 
  name: FormControl = new FormControl('', [Validators.minLength(1), Validators.maxLength(50)]); 
  festival: FormControl = new FormControl('', [Validators.minLength(1), Validators.maxLength(50)]);
   MyNewForm: FormGroup = new FormGroup({ id: this.id, name: this.name, festival: this.festival }); 
   Clic(datos: FormGroup) 
   { 
    console.log(datos.value); 
  } 
  awards: Awards[] = [] 
  award: Awards = 
  { 
    id: 0, name: '', festival: '' 
  } 
  ngOnInit() 
  { 
    this.getAward() 
  } 
  getAward() { const id = this.activatedRoute.snapshot.params['id'];
  this.http.getAwardById(id).subscribe(data => { console.log(data); 
    this.award = data as Awards; console.log(this.award); 
  }); 
} 
onUpdateAward() {
    const updatedAward = this.MyNewForm.value; 
    console.log(updatedAward)
    const id = this.activatedRoute.snapshot.params['id'];
    this.http.updateAward(updatedAward).subscribe(result => {
      console.log('Award actualizado:', result)}); window.location.href = '/admin/awards'; 
// Aquí puedes realizar alguna acción adicional, como actualizar la lista de usuarios }, error => { console.error('Error al actualizar el Director:', error); }); }
    
  }
}
