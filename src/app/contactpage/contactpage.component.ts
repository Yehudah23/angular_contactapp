import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactpage',
  imports: [FormsModule,CommonModule],
  templateUrl: './contactpage.component.html',
styleUrl: './contactpage.component.css',
 })


// interface Contact {
//   id: any;
//   name: string;
//   phone: string;
//   email?: string;
// }
export class ContactpageComponent {
//   constructor(public http:HttpClient){}

//   contactName = '';
//   contactPhone = '';
//   contactEmail = '';

//   editName='';
//   editId= null;
//   editPhone='';
//   editEmail='';
  
//   contacts: Contact[] = [];

//   ngOnInit() {
//     this.contacts = JSON.parse(localStorage.getItem('contacts')!) || [];
   
//   }

//   addContact() {
//     if (!this.contactName || !this.contactPhone) return alert("Name and Phone are required");

//   const newContact: Contact = {
//     id: this.contacts.length + 1,
//     name: this.contactName,
//     phone: this.contactPhone,
//     email: this.contactEmail,
  
//   };

//   this.contacts.push(newContact);
//   localStorage.setItem('contacts', JSON.stringify(this.contacts));

//   this.contactName = '';
//   this.contactPhone = '';
//   this.contactEmail = '';
//   this.sendContacts();
 
// }

// deleteContact(id: number) {
//   this.contacts = this.contacts.filter(contact => contact.id !== id);
//   localStorage.setItem('contacts', JSON.stringify(this.contacts));
// }


// editContact(contact: Contact) {
//   this.editId = contact.id;
//   this.editName = contact.name;
//   this.editPhone = contact.phone;
//   this.editEmail = contact.email || '';
// }

// saveEdit() {
//   if (this.editId === null) return;

//   const contact = this.contacts.find(contacttt => contacttt.id === this.editId);
//   if (contact) {
//     contact.name = this.editName;
//     contact.phone = this.editPhone;
//     contact.email = this.editEmail;
//     this.saveContacts();
//   }

//   this.cancelEdit();
// }

// cancelEdit() {
//   this.editId = null;
//   this.editName = '';
//   this.editPhone = '';
//   this.editEmail = '';
// }

// saveContacts() {
//   localStorage.setItem('contacts', JSON.stringify(this.contacts));
// } 

// sendContacts(){
//   this.http.post('http://localhost/contactapp/contactapp.php', this.contacts).subscribe(
//     (dataa)=>{
//     console.log(dataa);
//   },
// (error)=>{
//   console.log(error);
// })
// }

 }
