import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ApiService } from 'src/app/services/api/api.service';
import { DadosPessoais, Pessoas } from 'src/utils/types';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  people: Pessoas;
  loading: boolean = true;
  searchText: string = '';
  unknownPersonImage: string = '../../../assets/img/unknown-person.jpg';

  filteredPeopleList: DadosPessoais[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageEvent: PageEvent = {
    pageIndex: 0,
    pageSize: 12,
    length: 0,
  };

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
    try {
      this.loading = true;
      const response: Pessoas = await this.apiService.getLostPersons(
        event?.pageIndex || this.pageEvent.pageIndex,
        event?.pageSize || this.pageEvent.pageSize
      );
      this.people = response;
      this.filteredPeopleList = this.people.content;
      return this.people;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      this.loading = false;
    }
  }

  filterResults(text: string) {
    if (!text || this.searchText) {
      this.filteredPeopleList = this.people.content;
      return;
    }

    this.filteredPeopleList = this.people.content.filter(
      (person) =>
        person?.nome.toLowerCase().includes(text.toLowerCase()) ||
        person?.idade.toString().includes(text.toLowerCase()) ||
        person?.sexo.toLowerCase().includes(text.toLowerCase())
    );
  }

  hasPerson(person: DadosPessoais) {
    return (
      person &&
      person.ultimaOcorrencia &&
      person.ultimaOcorrencia.ocorrenciaEntrevDesapDTO
    );
  }

  formatString(inputString: string): string {
    let words = inputString.split(' ');
    let formattedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
    let formattedString = formattedWords.join(' ');

    return formattedString;
  }
}
