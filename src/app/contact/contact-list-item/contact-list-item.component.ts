import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../service/contact.service';
import {MatSnackBar} from '@angular/material';
import {Router, Routes} from '@angular/router';
@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact;
  @Output() contactSelect: EventEmitter<any>;
  constructor(private contactService: ContactService, private snackbar: MatSnackBar, private route: Router) {

    this.contactSelect = new EventEmitter<any>();
  }

  ngOnInit() {

  }

  onContactSelect() {
    this.contactSelect.emit();
  }
  onDelete() {
    this.contactService.deleteContact(this.contact);
    console.log('poisto onnistui');
    this.snackbar.open('Contact successfully deleted', 'OK', {duration: 3000});

  }
  onEditContact() {
    this.contactService.editContact(this.contact);
    this.route.navigate(['/contacts/edit', this.contact.id]);
    console.log(this.contact.id);

  }
}
