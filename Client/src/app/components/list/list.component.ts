import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../services/contact.service';
import{Contact} from '../../contact';
import {Router} from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  contacts:Contact[];
  constructor(private ContactService:ContactService,
    private router:Router) { }

  ngOnInit(): void {
    this.readContacts();
  }

    readContacts(){
      this.ContactService.readContacts().subscribe(data=>{
        console.log(data);
        this.contacts=data['msg'];
      },error=>{
        console.log(error);
      })
    }
    doUpdate(contact){
      this.ContactService.setter(contact);
      this.router.navigate(['/createUpdate']);
    }
    doDelete(contact){
      this.ContactService.deleteContact(contact._id).subscribe(data=>{
        this.contacts.splice(this.contacts.indexOf(contact),1)
      },
      error=>{
        console.log(error);
      })
    }
}

