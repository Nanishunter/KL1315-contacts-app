import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import { ContactProvider } from '../interfaces/contact-provider';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactLocalStorageService implements ContactProvider {

  localStorage: 'contacts-app';
  contacts: Contact[];

  constructor() {
    if (!localStorage.getItem(this.localStorage)) {
      localStorage.setItem(this.localStorage, JSON.stringify([]));


    }
    const storageElement = localStorage.getItem(this.localStorage);
    this.contacts = JSON.parse(storageElement);
  }

  get(): Observable<Contact[]> {
    return of(this.contacts);
  }

  getContacts(): Observable<Contact[]> {
    return of(this.contacts);

  }



  getById(id: string): Observable<Contact> {
    let copy: Contact;
    for (const contact of this.contacts) {
      if (contact.id === Number(id)) {
        copy = Object.assign({}, contact);
        return of (contact);
      }
    }
  }

  create(contact: Contact): Observable<Contact> {
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

    return of(contact);
  }

  deleteContact(contact: Contact): Observable<any> {
    for (let i = 0; i < this.contacts.length; i++) {
      if (contact.id === this.contacts[i].id) {
        this.contacts.splice(i, 1);
      }
    }
    localStorage.removeItem(this.localStorage);
    localStorage.setItem(this.localStorage, JSON.stringify(this.contacts));
    return of(contact);
  }


  edit(contact: Contact): Observable<Contact> {
    for (let i = 0; i < this.contacts.length; i++) {
      if (contact.id === this.contacts[i].id) {
        this.contacts[i] = contact;
      }
    }
  localStorage.setItem(this.localStorage, JSON.stringify(this.contacts));

  return of(contact);
  }

  getFiltered(value: string): Observable<Contact[]> {
    if (value) {
      console.log(value);
      const filtered = this.contacts.filter(contact => contact.firstName.toLowerCase().includes(value) ||
      contact.lastName.toLowerCase().includes(value) ||
      contact.city.toLowerCase().includes(value));

       console.log(value);
      return of(filtered);
    }
    if (!value) {
      return this.get();

    }
  }


}
