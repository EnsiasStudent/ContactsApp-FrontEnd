import {Injectable} from "@angular/core"
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Contact } from 'src/model/model.contact';


@Injectable()
export class ContactsService{
    constructor(public http:Http){
        
    }

    getContact(id:number){
        return this.http.get("http://localhost:9000/contacts/"+id).pipe(
            map(resp => resp.json()),
        );
    }

    saveContact(contact:Contact){
        return this.http.post("http://localhost:9000/contacts", contact).pipe(
            map(resp => resp.json()),
        );
    }

    getContacts(motCle:string, size:number, page:number){
        return this.http.get("http://localhost:9000/chercherContacts?mc="+motCle+"&size="+size+"&page="+page+"").pipe(
            map(resp => resp.json()),
        );
    }

    updateContact(contact:Contact){
        return this.http.put("http://localhost:9000/contacts/"+contact.id,contact).pipe(
            map(resp => resp.json()),
        )
    }

    deleteContact(id:number){
        return this.http.delete("http://localhost:9000/contacts/"+id).pipe(
            map(resp => resp.json()),
        )
    }
}