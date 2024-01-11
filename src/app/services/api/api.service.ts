import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Pessoas } from 'src/utils/types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  reponseData: Pessoas[];
  constructor(private http: HttpClient) {
    this.reponseData = [];
  }

  /** Get Lost Persons */
  async getLostPersons() {
    return new Promise<Pessoas[]>((resolve, reject) => {
      this.http
        .get<Pessoas[]>(`${environment.baserUrl}/filtro?status=DESAPARECIDO`)
        .subscribe({
          next: (response) => {
            this.reponseData = response;
            resolve(this.reponseData);
          },
          error: (error) => {
            reject(error);
          },
        });
    });
  }
}
