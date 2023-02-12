import { Component } from '@angular/core';
import {CatFact, CATS_API_BASE_URL, CATS_API_ENDPOINT_FACTS_RANDOM} from "../cats-api/model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-page-facts-list',
  templateUrl: './page-facts-list.component.html',
  styleUrls: ['./page-facts-list.component.css']
})
export class PageFactsListComponent {
  numberOfFacts: number = 0
  factsList: CatFact[] = []
  columns: string[] = [
    'cat-fact-id',
    'cat-fact-text',
    'cat-fact-details'
  ]

  constructor(private http: HttpClient) {
  }

  getFacts() {
    this.http.get<CatFact[]>(CATS_API_BASE_URL + CATS_API_ENDPOINT_FACTS_RANDOM, {
      params: {
        amount: this.numberOfFacts
      }
    }).subscribe({
      next: dane => { // jeśli sukces, wywołaj ten blok kodu
        this.factsList = [...dane]
      },
      error: err => { // jeśli błąd, wywołaj ten blok kodu
        console.log("Wystąpił błąd: " + err)
      }
    })
  }
}
