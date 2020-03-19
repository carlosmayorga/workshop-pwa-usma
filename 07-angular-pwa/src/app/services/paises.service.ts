import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})

export class PaisesService {

  private paises: Pais[] = [];

  constructor(private http: HttpClient) {}


  getPaises(): Promise < Pais[] > {

    if (this.paises.length > 0) {
      return Promise.resolve(this.paises);
    }

    return new Promise(resolve => {

      this.http.get('https://restcountries.eu/rest/v2/lang/es')
        .subscribe((paises: Pais[]) => {

          this.paises = paises;

          resolve(paises);
        });
    });
  }

  getPaisPorId(id: string): Promise < Pais > {

    if (this.paises.length > 0) {
      const pais = this.paises.find(p => p.alpha3Code === id);
      return Promise.resolve(pais);
    }

    return this.getPaises().then(paises => {
      const pais = this.paises.find(p => p.alpha3Code === id);
      return Promise.resolve(pais);
    });

  }

}
