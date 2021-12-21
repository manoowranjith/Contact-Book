import { Component, OnInit } from '@angular/core';
import { contacts } from '../contact';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contactDetails:any;
  newContact={
    name:"",
    email:"",
    phoneNumber:"",
    image:""
  };
  constructor() {
    this.contactDetails=contacts
   }

  ngOnInit(): void {
  }
  addContact()
  {
    this.contactDetails.unshift(this.newContact)
    this.newContact={
      name:"",
      email:"",
      phoneNumber:"",
      image:""
    };
  }
}
