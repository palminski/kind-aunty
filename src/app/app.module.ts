import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { XyzComponent } from './development-components/xyz/xyz.component';
import { AbcComponent } from './development-components/abc/abc.component';
import { DevelopmentHelpComponent } from './development-components/development-help/development-help.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ForParentsComponent } from './pages/for-parents/for-parents.component';
import { ForTeachersComponent } from './pages/for-teachers/for-teachers.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    AbcComponent,
    DevelopmentHelpComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ForParentsComponent,
    ForTeachersComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
