import { Component } from '@angular/core';
import { ContactsStore } from './store/contacts.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ContactsStore],
})
export class AppComponent {
  contacts$ = this.contactsStore.filteredContacts$;

  constructor(private readonly contactsStore: ContactsStore) {}

  searchContacts(term: string) {
    this.contactsStore.patchState({ searchString: term });
  }
}
