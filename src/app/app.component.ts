import { Component } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { filter } from 'rxjs/operators';
import { ContactsStore } from './store/contacts.store';
import { Contact } from './models/contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ContactsStore],
})
export class AppComponent {
  contacts$ = this.contactsStore.filteredContacts$;

  constructor(private contactsStore: ContactsStore) {}
}
