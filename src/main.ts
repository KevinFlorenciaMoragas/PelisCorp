import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


platformBrowserDynamic().bootstrapModule(AppModule)

  .catch(err => console.error(err));






let progress = document.getElementById('progressbar') as HTMLElement;

let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {

  let progressHeight = (window.pageYOffset / totalHeight) * 100;

  progress.style.height = progressHeight + "%";

}



function contarLetras() {

  let num = (document.getElementById("mobile") as HTMLInputElement).value;

  if (num.length > 8) {

    window.alert("El campo nombre solo puede tener 9 caracteres");

  } else if (num.length <= 7) {

    (document.getElementById("counter") as HTMLInputElement).value = num.length.toString();

  }

}