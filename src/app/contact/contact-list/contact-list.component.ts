import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../service/contact.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService,
              private route: Router, private router: ActivatedRoute) {
    this.contacts = [];
  }

  ngOnInit() {
    /*
    this.contacts.push(new Contact(1, 'First', 'Contact'));
    this.contacts.push(new Contact(2, 'Second', 'Contact'));
    this.contacts.push(new Contact(3, 'Third', 'Contact'));
    */
    this.contacts = this.contactService.getContacts();
    console.log(this.contacts);
  }

  onContactSelect(contact: Contact) {
    console.log('Contact selected:' + contact.id);
  }
  onArrowselect() {
    this.route.navigate(['/contacts/new']);
  }
}
