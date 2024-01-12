import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ApiService } from 'src/app/services/api/api.service';
import { Pessoas } from 'src/utils/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  people: Pessoas;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageEvent: PageEvent;

  constructor(private apiService: ApiService) {
    this.pageEvent = new PageEvent();
    this.people = {
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
      size: 12,
      sort: {
        empty: false,
        sorted: false,
        unsorted: false,
      },
    };
  }

  ngOnInit(): void {
    this.getLostPersonData();
  }

  async getLostPersonData(event?: PageEvent) {
    console.log('tem?', event);
    try {
      const response: Pessoas = await
      this.apiService.getLostPersons(event?.pageIndex, event?.pageSize);
      this.people = response;
      console.log(this.people);
      return this.people;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
