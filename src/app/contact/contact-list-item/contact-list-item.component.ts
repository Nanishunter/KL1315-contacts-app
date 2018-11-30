import { Contact } from './../contact';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ContactService} from '../service/contact.service';
import {MatSnackBar, MatDialog} from '@angular/material';
import {Router, Routes} from '@angular/router';
import {ConfirmDialogComponent} from '../dialog/confirm-dialog/confirm-dialog.component'

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {

  @Input() contact: Contact;
  @Output() contactSelect: EventEmitter<any>;
  constructor(private contactService: ContactService, private snackbar: MatSnackBar, private route: Router, private dialog: MatDialog) {

    this.contactSelect = new EventEmitter<any>();
  }

  ngOnInit() {

  }

  onContactSelect() {
    this.contactSelect.emit();
  }
  onDelete() {


    const dialogRef = this.dialog.open(ConfirmDialogComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });


  }
  onEditContact() {
    this.route.navigate(['/contacts/edit', this.contact.id]);
    this.contactService.editContact(this.contact);
    console.log(this.contact.id);

  }

  removeContact() {
    this.contactService.deleteContact(this.contact).subscribe( () => {
      this.snackbar.open('Contact successfully deleted', 'OK', {duration: 3000});
    });
  }


  }


