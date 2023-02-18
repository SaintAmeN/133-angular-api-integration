import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CatFact, CATS_API_BASE_URL, CATS_API_ENDPOINT_FACTS_RANDOM } from '../cats-api/model';

@Component({
  selector: 'app-page-facts-generator',
  templateUrl: './page-facts-generator.component.html',
  styleUrls: ['./page-facts-generator.component.css']
})
export class PageFactsGeneratorComponent {
  generatedFact: CatFact | null = null

  constructor(private httpClient: HttpClient) {

  }

  generateFact(type: string) {
    this.httpClient.get<CatFact>(CATS_API_BASE_URL + CATS_API_ENDPOINT_FACTS_RANDOM,
      {
        params: {
          'animal_type': type
        }
      })
      .subscribe({
        next: data => {
          this.generatedFact = data
        },
        error: err => {
          console.log('Error loading cat fact: ' + err)
        }
      })
  }
}
