import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CatFactsListComponent } from './cat-facts-list/cat-facts-list.component';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import { CoreNavigatorComponent } from './core-navigator/core-navigator.component';
import { CoreMainComponent } from './core-main/core-main.component';
import { CoreFooterComponent } from './core-footer/core-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CatFactsListComponent,
    CoreNavigatorComponent,
    CoreMainComponent,
    CoreFooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
