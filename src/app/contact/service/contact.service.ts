import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {Observable} from 'rxjs';
import {ContactLocalStorageService} from './contact-local-storage.service';
import {ContactHttpService } from './contact-http.service';
import {ContactProvider} from '../interfaces/contact-provider';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];
  contact: Contact;

  constructor(private localStorage: ContactLocalStorageService, private contacthttpService:
    ContactHttpService, private contactProvider: ContactProvider) {
    this.contacts = [];

    this.contacts.push(new Contact(1, 'Antti', 'Karjalainen', 'Hietasenkatu 16', 'Mikkeli',
      '50150', '0405173943', 'antti.karjalainen@student.saimia.fi'));
    this.contacts.push(new Contact(2, 'Arto', 'Lindgren', 'Hietasenkatu 16', 'Stadi',
      '50150', '0405173943', 'antti.karjalainen@student.saimia.fi'));
    this.contacts.push(new Contact(3, 'PeksiPekka', 'Taalasmaa', 'Pirkonlähteenkatu 5', 'LPR',
      '50150', '0405173943', 'antti.karjalainen@student.saimia.fi'));
    this.contacts.push(new Contact(4, 'Tuomas', 'Käyhty', 'Hietasenkatu 16', 'Mikkeli',
      '50150', '0405173943', 'antti.karjalainen@student.saimia.fi'));
  }

  getContacts(): Observable <Contact[]> {
    return this.contactProvider.getContacts();
  }

/*
  deleteContact(contact: Contact) {

    this.localStorage.deleteContact(contact);




  }*/

  deleteContact (contact: Contact): Observable<any> {
    return this.contactProvider.deleteContact(contact);
  }


  getContactById(id: string): Observable<Contact> {
    return this.contactProvider.getById(id);

  }

  addContact(contact: Contact): Observable<Contact> {
    return this.contactProvider.create(contact);
  }

  editContact(contact: Contact): Observable<Contact> {
    return this.contactProvider.edit(contact);
  }
  getFiltered(value: string): Observable<Contact[]> {
    return this.contactProvider.getFiltered(value);
  }
}
