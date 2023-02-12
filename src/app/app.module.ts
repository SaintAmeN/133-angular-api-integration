import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {CoreNavigatorComponent} from './core-navigator/core-navigator.component';
import {CoreMainComponent} from './core-main/core-main.component';
import {CoreFooterComponent} from './core-footer/core-footer.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { PageHomeComponent } from './page-home/page-home.component';
import { PageFactsSingleComponent } from './page-facts-single/page-facts-single.component';
import { PageFactsGeneratorComponent } from './page-facts-generator/page-facts-generator.component';
import { PageFactsListComponent } from './page-facts-list/page-facts-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    CoreNavigatorComponent,
    CoreMainComponent,
    CoreFooterComponent,
    PageHomeComponent,
    PageFactsSingleComponent,
    PageFactsGeneratorComponent,
    PageFactsListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    RouterOutlet,
    MatCardModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
