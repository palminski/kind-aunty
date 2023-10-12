import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components only for development
import { AbcComponent } from './development-components/abc/abc.component';
import { XyzComponent } from './development-components/xyz/xyz.component';
import { DevelopmentHelpComponent } from './development-components/development-help/development-help.component';

//Production Components
import { ForParentsComponent } from './pages/for-parents/for-parents.component';
import { ForTeachersComponent } from './pages/for-teachers/for-teachers.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';




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
