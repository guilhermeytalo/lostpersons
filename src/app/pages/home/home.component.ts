import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  people: any;
  constructor(private apiService: ApiService) {
    this.people = {
      content: [],
    };

  }

  ngOnInit(): void {
    this.getLostPersonData();
  }

  async getLostPersonData() {
    this.people =  await this.apiService
      .getLostPersons();

      console.log(this.people);
  }
}
