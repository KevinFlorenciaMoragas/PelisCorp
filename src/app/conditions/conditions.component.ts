import { Component } from '@angular/core';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent {
  name:string = 'PelisCorp'
  country:string = 'Spain'
  date :number = new Date().getFullYear();
}
