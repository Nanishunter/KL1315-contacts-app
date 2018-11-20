import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {Observable} from 'rxjs';
import {ContactLocalStorageService} from './contact-local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];
  contact: Contact;

  constructor(private localStorage: ContactLocalStorageService) {
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

  getContacts(): Contact[] {
    return this.localStorage.getContacts();
  }


  deleteContact(id: number) {

    this.localStorage.deleteContact(this.contacts);




  }


  getContactById(id: string) {
    return this.localStorage.getContactbyId(id);

  }


  addContact(contact: Contact) {
    this.localStorage.addContact(contact);
  }


}
