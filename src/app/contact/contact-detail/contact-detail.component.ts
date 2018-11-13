import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Routes} from '@angular/router';
import {ContactService} from '../service/contact.service';
import {Contact} from '../contact';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  constructor(private route: Router, private router: ActivatedRoute, private contactService: ContactService,  private snackbar: MatSnackBar) {

}

  ngOnInit() {
    console.log('onload');
  }
  onSave() {
    this.route.navigate(['/contacts']);
    console.log('Save success');
    this.snackbar.open('Created contact!', 'OK', {duration: 3000});

  }

}
