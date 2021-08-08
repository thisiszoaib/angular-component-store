import { Component, OnInit } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit {
  name = '';
  phone = '';

  constructor(public ref: DialogRef) {}

  ngOnInit(): void {}

  add() {
    if (!this.phone || !this.name) return;
    this.ref.close({ name: this.name, phone: this.phone });
  }
}
