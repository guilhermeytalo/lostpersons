import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Pessoas } from 'src/utils/types';
import { lastValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  reponseData: any;

  constructor(private http: HttpClient) {
    this.reponseData = {
      content: [],
    };
  }

  /** Get Lost Persons */
  async getLostPersons() {
    const data = this.http.get<Pessoas>(
      `${environment.baserUrl}/filtro?status=DESAPARECIDO`
    );
    this.reponseData = await lastValueFrom(data);
    return this.reponseData;
  }
}
