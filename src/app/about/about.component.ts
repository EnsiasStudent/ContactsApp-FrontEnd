import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  infos={
    prenom: 'Nizar',
    nom: 'El Khayir',
    email: 'elkhayirnizar@gmail.com'
  };

  constructor() { }

  ngOnInit() {
  }

}
