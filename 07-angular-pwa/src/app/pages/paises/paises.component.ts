import { Component, OnInit } from '@angular/core';
import { Pais } from 'src/app/interfaces/pais.interface';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: Pais[] = [];

  constructor(private paisesServices: PaisesService) {}

  ngOnInit() {

    this.paisesServices.getPaises()
      .then(paises => {
        this.paises = paises;
      });

  }
}
