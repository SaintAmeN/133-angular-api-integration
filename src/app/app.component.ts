import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CatFact, CATS_API_BASE_URL, CATS_API_ENDPOINT_FACTS_RANDOM} from "./cats-api/model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'j133-api-integration';
  odpowiedzSerwera: string = "";

  constructor(private httpClient: HttpClient) {
  }

  wywolajZapytanie(): void {
    console.log('Hello my Frontend world!')

    // PUT POST GET PATCH DELETE
    //  CRUD
    //          SQL              Metoda HTTP
    // Create   (INSERT INTO...) POST/PUT
    // Read     (SELECT ...    ) GET
    // Update   (UPDATE ...    ) POST/PATCH/PUT
    // Delete   (DELETE ...    ) DELETE

    // https://cat-fact.herokuapp.com/facts/random
    this.httpClient.get<CatFact>(CATS_API_BASE_URL + CATS_API_ENDPOINT_FACTS_RANDOM)
      .subscribe({
        next: wynik => {
          console.log("Odebrano wynik " + JSON.stringify(wynik))
          this.odpowiedzSerwera = JSON.stringify(wynik)
        }
      })
  }
}
