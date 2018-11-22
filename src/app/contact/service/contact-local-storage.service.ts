import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ContactLocalStorageService {

  localStorage: 'contacts-app';
  contacts: Contact[];

  constructor() {
    if (!localStorage.getItem(this.localStorage)) {
      localStorage.setItem(this.localStorage, JSON.stringify([]));


    }
    const storageElement = localStorage.getItem(this.localStorage);
    this.contacts = JSON.parse(storageElement);
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  editContact(contact: Contact) {

  }

  getContactbyId(id: string): Contact {
    for (const contact of this.contacts) {
      if (contact.id = Number(id)) {
        return contact;
        console.log(id);
      }
      console.log(id);

      return null;
    }
  }

  addContact(contact: Contact) {
    console.log('adding contact id:' + contact.id);
    let lastId = 1;
    if (this.contacts.length > 0) {
      // get the highest id
      lastId = this.contacts[this.contacts.length - 1].id;
      lastId = lastId + 1;
    }
    contact.id = lastId;
    this.contacts.push(contact);
    // update local storage
    localStorage.removeItem(this.localStorage);
    localStorage.setItem(this.localStorage, JSON.stringify(this.contacts));
  }

  deleteContact(contact: Contact) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (contact.id === this.contacts[i].id) {
        this.contacts.splice(i, 1);
      }
    }
    localStorage.removeItem(this.localStorage);
    localStorage.setItem(this.localStorage, JSON.stringify(this.contacts));
  }
}
