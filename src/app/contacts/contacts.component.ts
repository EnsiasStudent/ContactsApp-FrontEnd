import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ContactsService } from 'src/services/contacts.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Contact } from 'src/model/model.contact';

@Component({
  selector: 'app-c',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  pageContacts:any;
  closeResult:string;
  motCle:string = "";
  currentpage:number = 0;
  size:number = 5;
  pages:Array<number>;

  constructor(public http:Http,public contactservice:ContactsService, public router:Router,public modalService:NgbModal) {

  }

  ngOnInit() {
    
  }

  doSearch(){
    this.contactservice.getContacts(this.motCle, this.size, this.currentpage).subscribe(data => {
      this.pageContacts = data;
      this.pages = new Array(data.totalPages);
    }, err => {
      console.log(err);
    })
  }

  chercher(){
    this.doSearch(); 
  }

  gotoPage(i:number){
    this.currentpage = i;
    this.doSearch();
  }

  onEditContact(id:number){
    this.router.navigate(['editContact', id]); 
  }

  onDeleteContact(c:Contact){
    //let confirm = window.confirm('Etes vous sur de vouloir supprimer ?');
    this.contactservice.deleteContact(c.id).subscribe(
        data => {
            this.pageContacts.content.splice(
            this.pageContacts.content.indexOf(c),1)
          }, err => {console.log(err);} 
    )
  }

  
  public open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
