import { Component } from '@angular/core';

@Component({
  selector: 'app-heroine',
  templateUrl: './heroine.component.html',
  styleUrls: ['./heroine.component.scss']
})
export class HeroineComponent {
  
  public topFilms = [

    {
      number:"1",
      title:"La Casa de Papel",
      image:"../../assets/images/Top10/1-papel.webp"
    },
    {
      number:"2",
      title:"La Reina del Flow",
      image:"../../assets/images/Top10/2-reina.webp"
    },
    {
      number:"3",
      title:"Titanes",
      image:"../../assets/images/Top10/3-titanes.webp"
    },
    {
      number:"4",
      title:"Lost in Space",
      image:"../../assets/images/Top10/4-lostinspace.webp"
    },
    {
      number:"5",
      title:"Donde caben dos",
      image:"../../assets/images/Top10/5-dondecaben.webp"
    },
  ]
}
