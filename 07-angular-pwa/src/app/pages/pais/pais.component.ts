import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pais } from 'src/app/interfaces/pais.interface';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css']
})
export class PaisComponent implements OnInit {

  pais: Pais;

  constructor(private paisesService: PaisesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);

    this.paisesService.getPaisPorId(id).then(pais => {


      if (!pais) {
        return this.router.navigateByUrl('/');
      }

      this.pais = pais;

    });
  }

}
