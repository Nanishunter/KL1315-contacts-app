import {IContactProvider} from './i-contact-provider'
import {Observable} from 'rxjs';
import {Contact} from '../contact';
export abstract class ContactProvider implements IContactProvider{

    abstract getContacts(): Observable<Contact[]>;
    abstract getById(id: string): Observable<Contact>;
    abstract edit(contact: Contact): Observable<Contact>;
    abstract create(contact: Contact): Observable<Contact>;
    abstract deleteContact(contact: Contact): Observable<any>;
    abstract getFiltered(value: string): Observable<Contact[]>;

}
