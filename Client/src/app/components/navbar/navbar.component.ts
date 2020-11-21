import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {ContactService} from '../../services/contact.service';
import {Contact} from '../../contact';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private contactService:ContactService) { }

  ngOnInit(): void {
  }
  newContact(event:any){
    event.preventDefault();
    this.contactService.setter(new Contact());
    this.router.navigate(['/createUpdate']);
  }
}
