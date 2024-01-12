import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pessoas } from 'src/utils/types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  reponseData: Pessoas;
  constructor(private http: HttpClient) {
    this.reponseData = {
      content: [],
    };
  }

  /** Get Lost Persons */
  async getLostPersons(pageIndex: number = 0, pageSize: number = 12) {
    return new Promise<Pessoas>((resolve, reject) => {
      this.http
        .get<Pessoas>(
          `${environment.baserUrl}/filtro?porPagina=${pageSize}&status=DESAPARECIDO&pagina=${pageIndex}`
        )
        .subscribe({
          next: (response) => {
            this.reponseData = response;
            resolve(this.reponseData);
          },
          error: (error) => {
            console.error(error);
            reject(error);
          },
        });
    });
  }
}
