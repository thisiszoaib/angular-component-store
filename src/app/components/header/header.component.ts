import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ContactsStore } from 'src/app/store/contacts.store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  search = false;

  constructor(private contactsStore: ContactsStore) {}

  ngOnInit(): void {}

  showSearch() {
    this.search = true;
  }

  hideSearch() {
    this.search = false;
  }

  searchContacts(searchString: string) {
    this.contactsStore.patchState({ searchString });
  }

  addContact() {
    this.contactsStore.showAddDialog();
  }
}
