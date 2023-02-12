import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {
  CatFact,
  CatFactDetails,
  CatFactStatus,
  CATS_API_BASE_URL,
  CATS_API_ENDPOINT_FACTS_BY_ID
} from "../cats-api/model";

@Component({
  selector: 'app-page-facts-single',
  templateUrl: './page-facts-single.component.html',
  styleUrls: ['./page-facts-single.component.css']
})
export class PageFactsSingleComponent {
  factDetails: CatFactDetails = {
    _id: 'Loading...',
    deleted: false,
    updatedAt: 'Loading...',
    createdAt: 'Loading...',
    text: 'Loading...',
    type: 'Loading...',
    user: {
      _id: "Loading...",
      name: {
        first: "Loading...",
        last: "Loading..."
      },
      photo: "-",
    },
    status: {
      sentCount: 0,
    }
  };

  id: string | null = null;

  constructor(private route: ActivatedRoute,
              private http: HttpClient) {
    route.params.subscribe(parameters => {
      this.id = parameters['id'];

      console.log('Param id: ' + this.id)
      this.getFactWithId(this.id!)
    })
  }

  getFactWithId(id: string) {
    this.http.get<CatFactDetails>(CATS_API_BASE_URL + CATS_API_ENDPOINT_FACTS_BY_ID.replace('{}', id))
      .subscribe({
        next: value => {
          this.factDetails = value;
        },
        error: err => {
          console.log('Error: ' + err)
        }
      })
  }
}
