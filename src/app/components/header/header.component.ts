import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('mainIcon') mainIcon: ElementRef;

  @Output() searchContacts = new EventEmitter<string>();
  @Output() addContact = new EventEmitter<any>();

  search = false;

  constructor() {}

  ngOnInit(): void {}

  showSearch() {
    this.search = true;
  }

  hideSearch() {
    this.search = false;
  }
}
