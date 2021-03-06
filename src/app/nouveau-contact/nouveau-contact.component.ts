import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/services/contacts.service';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {

  constructor(public contactsService:ContactsService) { }

  ngOnInit() {
  }

  onSaveContact(dataForm){
    this.contactsService.saveContact(dataForm).subscribe(
      data => {
        console.log("OK")
      }, err => {
        console.log(JSON.parse(err._body).message);
      }
    )
  }
}
