import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactsStore } from 'src/app/store/contacts.store';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  contacts$ = this.contactsStore.filteredContacts$;

  constructor(private contactsStore: ContactsStore) {}

  ngOnInit(): void {}

  deleteContact(contact: Contact) {
    this.contactsStore.deleteContact(contact);
  }
}
