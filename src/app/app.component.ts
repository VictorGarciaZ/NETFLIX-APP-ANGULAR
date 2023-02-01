import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';
  
  comedyFilms = {

    section: "Comedia",
    films: [{
    title: "Titulo",
    image: "Imagen"
    }],
  };
}

