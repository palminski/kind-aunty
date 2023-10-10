import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components only for development
import { AbcComponent } from './abc/abc.component';
import { XyzComponent } from './xyz/xyz.component';
import { DevelopmentHelpComponent } from './development-help/development-help.component';

//Production Components
import { ForParentsComponent } from './for-parents/for-parents.component';
import { ForTeachersComponent } from './for-teachers/for-teachers.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';




// sets up routes constant where you define your routes
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'for-parents', component: ForParentsComponent},
  {path: 'for-teachers', component: ForTeachersComponent},

  {path: 'ng-dev', component:DevelopmentHelpComponent}
];

//configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
