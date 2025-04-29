import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Contact{
  name:string;
  phone:string;
  email?:string;

}
interface AllContacts{
 id:number;
 contact_name:string;
  contact_number:string;
  contact_email?:string;
} 
@Component({
  selector: 'app-newcontact',
  imports: [FormsModule,CommonModule],
  templateUrl: './newcontact.component.html',
  styleUrl: './newcontact.component.css'
})
export class NewcontactComponent {
constructor(public http:HttpClient){}
allcontacts: AllContacts[] =[];

contactName='';
contactPhone='';
contactEmail='';
 msg='';

 
 editName='';
 editId: number|null=null;
 editPhone='';
 editEmail='';

ngOnInit(){
  this.http.get('http://localhost/contactapp/getcontacts.php').subscribe(
    (res:any)=>{
    console.log(res);
    if(res.status){
      this.allcontacts=res.data;
      console.log(this.allcontacts);
      
    }
    
    },
    (error)=>{
      console.log(error);
    }
  )
}

addContact(){
  const newContact: Contact ={
    name: this.contactName,
    phone: this.contactPhone,
    email: this.contactEmail
  };

  this.http.post('http://localhost/contactapp/contactapp.php', newContact).subscribe(
    (res)=>{
    console.log(res);
  },
(error)=>{
  console.log(error);
})
}

deleteContact(id:number){
  this.http.post('http://localhost/contactapp/deletecontactS.php',{id}).subscribe(
    (res)=>{
      console.log(res);
     
    },
    (error)=>{
      console.log(error);
    }
  )
}


editContact(contact: AllContacts) {
  this.editId = contact.id;
  this.editName = contact.contact_name;
  this.editPhone = contact.contact_number;
  this.editEmail = contact.contact_email || '';
}

saveEdit() {
  if (this.editId === null) return;

  const updatedContact = {
    contactid: this.editId,
    fullname: this.editName,
    phonenumber: this.editPhone,
    email: this.editEmail
  };

  this.http.post('http://localhost/contactapp/editcontact.php', updatedContact).subscribe(
    (res: any) => {
      if (res.status) {
        this.msg = res.message;
        this.ngOnInit();
      } else {
        this.msg = res.message;
      }
      this.cancelEdit();
    },
    (err) => {
      console.error('Error editing contact', err);
    }
  );
}



cancelEdit(){
 this.editName='';
  this.editId=null;
  this.editPhone='';
  this.editEmail='';
}


}

