import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../service/contact.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact;
  @Output() contactSelect: EventEmitter<any>;

  constructor(private contactService: ContactService, private snackbar: MatSnackBar) {
    this.contactSelect = new EventEmitter<any>();
  }

  ngOnInit() {
    console.log(this.contact);
  }

  onContactSelect() {
    this.contactSelect.emit();
  }
  onDelete() {
    this.contactService.deleteContact(this.contact.id);
    console.log('poisto onnistui');
    this.snackbar.open('Contact successfully deleted', 'OK', {duration: 3000});

  }


}
