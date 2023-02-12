import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageHomeComponent} from "./page-home/page-home.component";
import {PageFactsSingleComponent} from "./page-facts-single/page-facts-single.component";
import {PageFactsListComponent} from "./page-facts-list/page-facts-list.component";
import {PageFactsGeneratorComponent} from "./page-facts-generator/page-facts-generator.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: PageHomeComponent},
  { path: "fact/:id", component: PageFactsSingleComponent},
  { path: "fact-list", component: PageFactsListComponent},
  { path: "fact-generator", component: PageFactsGeneratorComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
