import {Injectable} from '@angular/core';
import {Contact} from '../contact';

@Injectable({
  providedIn: 'root'
})


export class ContactService {

  contacts: Contact[];


  constructor() {
    this.contacts = [];
    this.contacts.push(new Contact(1, 'Antti', 'Karjalainen'));
    this.contacts.push(new Contact(2, 'Anti', 'Homma'));
    this.contacts.push(new Contact(3, 'Es', 'Karjalainen'));
  }

  getContacts(): Contact[] {
    return this.contacts;
  }
}


