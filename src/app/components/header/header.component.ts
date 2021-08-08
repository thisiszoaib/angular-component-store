import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { filter } from 'rxjs/operators';
import { ContactsStore } from 'src/app/store/contacts.store';
import { AddContactComponent } from '../add-contact/add-contact.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('mainIcon') mainIcon: ElementRef;

  search = false;

  constructor(
    private contactsStore: ContactsStore,
    private dialog: DialogService
  ) {}

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
    this.dialog
      .open(AddContactComponent)
      .afterClosed$.pipe(filter((contact) => !!contact))
      .subscribe((newContact) => {
        this.contactsStore.addContact(newContact);
      });
  }
}
