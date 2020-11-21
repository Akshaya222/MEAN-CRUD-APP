import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {ContactService} from '../../services/contact.service';
import {Contact} from '../../contact';


@Component({
  selector: 'app-updateanddelete',
  templateUrl: './updateanddelete.component.html',
  styleUrls: ['./updateanddelete.component.css']
})
export class UpdateanddeleteComponent implements OnInit {

  contact:Contact;
  constructor(private contactService:ContactService,private router:Router) { }
  ngOnInit(): void {
    this.contact=this.contactService.getter();

  }
  createOrUpdate(){
    if(this.contact._id==undefined){
      this.contactService.createContact(this.contact).subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['/']);
        },
       error=>{
         console.log(error);
       }

      )
    }
     else{
      this.contactService.updateContact(this.contact).subscribe(
        data=>{
          console.log(data);
          this.router.navigate(['/']);
        },
       error=>{
         console.log(error);
       }

      )
     }

    }


}
