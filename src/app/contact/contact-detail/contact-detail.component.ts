import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, Routes} from '@angular/router';
import {ContactService} from '../service/contact.service';
import {Contact} from '../contact';
import {MatSnackBar} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
import {ToolbarService} from '../../ui/toolbar/toolbar/toolbar.service';
import {ToolbarOptions} from '../../ui/toolbar/toolbar/toolbar-options';


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
              private toolbar: ToolbarService) {
    this.contact = new Contact();
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.editingEnabled = false;


  }


  ngOnInit() {

    this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'Edit contact'));
    if (this.contact.id === null) {
      this.editingEnabled = true;
      console.log('onload');
    }
    else {


      // View contact
      this.toolbar.setToolbarOptions(new ToolbarOptions('back', 'CREATE CONTACT'));


    }
  }

  onSave() {
    this.route.navigate(['/contacts']);
    console.log('Save success');
    this.snackbar.open('Created contact!', 'OK', {duration: 3000});

  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid value' :
        '';
  }
}


