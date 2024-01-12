import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Pessoas } from 'src/utils/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  people: Pessoas;
  constructor(private apiService: ApiService) {
    this.people = {
      content: [],
    };
  }

  ngOnInit(): void {
    this.getLostPersonData();
  }

  async getLostPersonData() {
    try {
      const response: Pessoas = await this.apiService.getLostPersons();
      this.people = response;
      console.log(this.people);
      return this.people;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
