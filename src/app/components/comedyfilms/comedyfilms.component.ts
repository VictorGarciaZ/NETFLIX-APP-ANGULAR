import { Component } from '@angular/core';

@Component({
  selector: 'app-comedyfilms',
  templateUrl: './comedyfilms.component.html',
  styleUrls: ['./comedyfilms.component.scss']
})
export class ComedyfilmsComponent {

  public comedyFilms = [

    {
      title:"Casi 300",
      image:"../../assets/images/Comedia/casi300.webp"
    },
    {
      title:"Los Caza-Fantasmas",
      image:"../../assets/images/Comedia/cazafantasmas.webp"
    },
    {
      title:"El Dictador",
      image:"../../assets/images/Comedia/dictador.webp"
    },
    {
      title:"Erase una vez en Hollywood",
      image:"../../assets/images/Comedia/erasehollywood.webp"
    },
  ]

}
