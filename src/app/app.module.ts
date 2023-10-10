import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { XyzComponent } from './xyz/xyz.component';
import { AbcComponent } from './abc/abc.component';
import { DevelopmentHelpComponent } from './development-help/development-help.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ForParentsComponent } from './for-parents/for-parents.component';
import { ForTeachersComponent } from './for-teachers/for-teachers.component';

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
    ForTeachersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
