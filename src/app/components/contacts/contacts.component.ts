import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  @Input() data: any[];

  @Output() deleteContact = new EventEmitter<{ name: string; phone: string }>();

  constructor() {}

  ngOnInit(): void {}
}
