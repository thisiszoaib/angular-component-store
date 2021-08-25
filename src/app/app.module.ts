import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { DialogModule } from '@ngneat/dialog';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HotToastModule } from '@ngneat/hot-toast';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    AddContactComponent,
  ],
  imports: [BrowserModule, FormsModule, CommonModule, DialogModule.forRoot(), HotToastModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
