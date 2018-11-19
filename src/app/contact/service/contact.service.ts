import {Injectable} from '@angular/core';
import {Contact} from '../contact';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[];

  constructor() {
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
    return this.contacts;
  }


  deleteContact(id: number) {

    for (const contact of this.contacts) {
      if (contact.id === id) {
        this.contacts.splice(this.contacts.indexOf(contact), 1);
        console.log('delete success');
      }
    }

  }

  createContact(contact: Contact) {

    const lastIndex = this.contacts[this.contacts.length - 1].id;
    contact.id = lastIndex + 1;
    this.contacts.push(contact);




  }
}
