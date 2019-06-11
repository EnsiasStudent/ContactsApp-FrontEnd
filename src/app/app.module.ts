import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { HttpModule } from '@angular/http';
import { ContactsService } from 'src/services/contacts.service';
import { FormsModule } from '@angular/forms';
import { NewContactComponent } from './new-contact/new-contact.component';
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component' 
import { NgBoostedModule } from 'ng-boosted';
import { OModalComponent } from './ngcomponents/o-modal/o-modal.component';

const appRoutes:Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'newcontact', component : NewContactComponent},
  {path: 'editContact/:id', component : EditContactComponent},
  {path: '',
   redirectTo: '/about',
   pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NewContactComponent,
    NouveauContactComponent,
    EditContactComponent,
    OModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpModule, FormsModule, NgBoostedModule, NgbModule
  ],
  providers: [ContactsService], // We need to implement our services here !!
  bootstrap: [AppComponent]   
})
export class AppModule { }
