import { Contact } from './../contact';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ContactService} from '../service/contact.service';
import {MatSnackBar, MatDialog, MatDialogConfig} from '@angular/material';
import {Router, Routes} from '@angular/router';
import {ConfirmDialogComponent} from '../dialog/confirm-dialog/confirm-dialog.component';

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

const dialogConfig = new MatDialogConfig();
dialogConfig.disableClose = true;
dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, dialogConfig

    );

    dialogRef.afterClosed().subscribe(result => {
      if (result)
     {
        this.contactService.deleteContact(this.contact).subscribe( () => {
          this.snackbar.open('Contact successfully deleted', 'OK', {duration: 3000});
        });

      }



      console.log('The dialog was Closed');
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

  onMapclick() {
    console.log('CliCKED MAP');
    this.route.navigate(['contacts/map', {address: this.contact.streetAddress, city: this.contact.city}]);
  }


  }


