import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  date : number = new Date().getFullYear()

   getCurrentYear(): number {
    const now = new Date();
    return now.getFullYear();
  }

}
