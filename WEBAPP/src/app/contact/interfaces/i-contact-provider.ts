import {Observable} from 'rxjs';
import {Contact} from '../contact';
export interface IContactProvider {

    getContacts(): Observable<Contact[]>;
    getById(id: string): Observable<Contact>;
    edit(contact: Contact): Observable<Contact>;
    create(contact: Contact): Observable<Contact>;
    deleteContact(contact: Contact): Observable<any>;
    getFiltered(value: string): Observable<Contact[]>;
}
