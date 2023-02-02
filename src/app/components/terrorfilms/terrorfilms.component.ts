import { Component } from '@angular/core';

@Component({
  selector: 'app-terrorfilms',
  templateUrl: './terrorfilms.component.html',
  styleUrls: ['./terrorfilms.component.scss']
})
export class TerrorfilmsComponent {

  public terrorFilms = [

    {
      title:"El Apóstol",
      image:"../../assets/images/Terror/apostol.jpg"
    },
    {
      title:"La Calle del Terror Parte 2, 1978",
      image:"../../assets/images/Terror/calleterror.jpg"
    },
    {
      title:"Infierno bajo el agua",
      image:"../../assets/images/Terror/infiernoagua.webp"
    },
    {
      title:"Insidious 2",
      image:"../../assets/images/Terror/insidious2.webp"
    },
    {
      title:"Life",
      image:"../../assets/images/Terror/life.webp"
    },
    {
      title:"Malasaña 32",
      image:"../../assets/images/Terror/malasana.webp"
    },
    
  ]
}
