import {Component} from '@angular/core';
import {CatFact, CATS_API_BASE_URL, CATS_API_ENDPOINT_FACTS_RANDOM} from "../cats-api/model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-cat-facts-list',
  templateUrl: './cat-facts-list.component.html',
  styleUrls: ['./cat-facts-list.component.css']
})
export class CatFactsListComponent {
  factsList: CatFact[] = []
  columns: string[] = [
    'cat-fact-id',
    'cat-fact-text',
    'cat-fact-details'
  ]

  iloscFaktow: number = 0

  constructor(private http: HttpClient) {
  }

  pobierzFakty() {
    // fire and forget // fire and subscribe
    this.http.get<CatFact[]>(CATS_API_BASE_URL + CATS_API_ENDPOINT_FACTS_RANDOM, {
      params: {
        amount: this.iloscFaktow
      }
    }).subscribe({
        next: dane => { // jeśli sukces, wywołaj ten blok kodu
          console.log("Otrzymaliśmy odpowiedź z serwera.")
          this.factsList = [...dane]
        },
        error: err => { // jeśli błąd, wywołaj ten blok kodu
          console.log("Wystąpił błąd: " + err)
        }
      })
  }
}
