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
      totalElements: 0,
      totalPages: 0,
      content: [],
      empty: false,
      first: false,
      last: false,
      number: 0,
      numberOfElements: 0,
      pageable: {
        offset: 0,
        paged: false,
        unpaged: false,
        pageNumber: 0,
        pageSize: 0,
        sort: {
          empty: false,
          sorted: false,
          unsorted: false,
        },
      },
      size: 0,
      sort: {
        empty: false,
        sorted: false,
        unsorted: false,
      },
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
