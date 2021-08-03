import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('mainIcon') mainIcon: ElementRef;

  @Output() searchContacts = new EventEmitter<string>();

  search = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  showSearch() {
    this.search = true;
  }

  hideSearch() {
    this.search = false;
  }

  ngDoCheck() {
    console.log('Change detection run!');
  }
}
