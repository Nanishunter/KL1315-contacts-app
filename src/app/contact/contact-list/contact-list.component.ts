import { MatSnackBar } from '@angular/material';
import { DialogService } from './../service/dialog.service';
import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ContactService} from '../service/contact.service';


import {ActivatedRoute, Router} from '@angular/router';
import {ToolbarService} from '../../ui/toolbar/toolbar/toolbar.service';
import {ToolbarOptions} from '../../ui/toolbar/toolbar/toolbar-options';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];
  p: any;
  values = '';


  constructor(private contactService: ContactService,
              private route: Router, private router: ActivatedRoute, private toolbar:
               ToolbarService, private dialogService: DialogService, private snackbar: MatSnackBar) {


  }

  ngOnInit() {
    this.toolbar.setToolbarOptions(new ToolbarOptions('menu', 'Contacts application'));
    /*
    this.contacts.push(new Contact(1, 'First', 'Contact'));
    this.contacts.push(new Contact(2, 'Second', 'Contact'));
    this.contacts.push(new Contact(3, 'Third', 'Contact'));
    */
    this.contactService.getContacts().subscribe(result => {
      this.contacts = result;
      this.snackbar.open('You can start by adding a contact by pressing the + icon on the right.', 'OK', {
        duration: 3000 });
    });
  }

  onContactDeleted(contact: Contact) {
    console.log('Contact selected:' + contact.id);
  }

  loadContacts() {

    this.contactService.getContacts().subscribe( result => {
this.contacts = result;
    }, () => {
      this.dialogService.openErrorDialog('Getting contacts failed!');
    });

  }

  onArrowselect() {
    this.route.navigate(['/contacts/new']);


  }

  filterContacts(value: string) {
    this.values += value;
    this.contactService.getFiltered(value).subscribe(result => {
      this.contacts = result;
    });
  }
}
