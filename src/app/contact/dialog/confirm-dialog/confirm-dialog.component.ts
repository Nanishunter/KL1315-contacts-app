import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Contact } from './../../contact';
import { Component, OnInit, Input, Inject, EventEmitter, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { from } from 'rxjs';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {


  @Input() contact: Contact;
  @Output() contactSelect: EventEmitter<any>;

  constructor(public dialogref: MatDialogRef<ConfirmDialogComponent>,
     @Inject (MAT_DIALOG_DATA)public data: any, private contactService:
     ContactService, private snackbar: MatSnackBar, private location: Location, private route: Router) {


      this.contactSelect = new EventEmitter<any>();

   }

  ngOnInit() {

  }

  save() {
    this.removeContact();
}

removeContact() {
this.contactService.deleteContact(this.contact).subscribe( () => {
  this.snackbar.open('Contact successfully deleted', 'OK', {duration: 3000});
});
this.dialogref.close();


}

onNoclick() {




}

}
