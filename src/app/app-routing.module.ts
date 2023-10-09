import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbcComponent } from './abc/abc.component';
import { XyzComponent } from './xyz/xyz.component';
import { DevelopmentHelpComponent } from './development-help/development-help.component';


// sets up routes constant where you define your routes
const routes: Routes = [
  {path: 'abc', component: AbcComponent},
  {path: 'xyz', component: XyzComponent},
  {path: 'dev-help', component: DevelopmentHelpComponent}
];

//configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
