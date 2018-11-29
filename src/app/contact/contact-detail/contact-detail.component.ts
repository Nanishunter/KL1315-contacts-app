import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Routes} from '@angular/router';
import {ContactService} from '../service/contact.service';
import {Contact} from '../contact';
import {MatSnackBar} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {ToolbarService} from '../../ui/toolbar/toolbar/toolbar.service';
import {ToolbarOptions} from '../../ui/toolbar/toolbar/toolbar-options';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})


export class ContactDetailComponent implements OnInit {

  contact: Contact;
  private email: FormControl;
  editingEnabled: boolean;

  constructor(private route: Router, private router: ActivatedRoute, private contactService: ContactService, private snackbar: MatSnackBar,
              private toolbar: ToolbarService, private dialog: MatDialog) {
    this.contact = new Contact();
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.editingEnabled = false;


  }


  ngOnInit() {
    this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'Edit contact'));
    const contactId = this.router.snapshot.paramMap.get('id');
    // Get contact by id
    if (this.contactService.getContactById(contactId) != null) {
      this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'Edit contact'));
    } else {
      this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'Create contact'));
      // contactia ei löytynyt, ohjataan kontakti näkymään
    }
  }


  onSave() {
    console.log('ContactDetailComponent: onSave');
    
    const contactId = this.router.snapshot.paramMap.get('id');
    if (contactId != null) {
      this.contactService.editContact(this.contact);
      this.snackbar.open('Contact edited!', '', {
        duration: 3000
      });
    } else {
      this.contactService.addContact(this.contact).subscribe(result => {
        this.snackbar.open('Contact created!', '', {
          duration: 3000
        });
        this.route.navigate(['/contacts']);
      });
      
    }
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid value' :
        '';
  }

  
}
