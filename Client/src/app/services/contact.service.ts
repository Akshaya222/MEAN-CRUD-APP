import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contact:Contact
  private baseURL:string="http://localhost:3000";
  private headers=new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient) { }

  createContact(contact:Contact){
    return this.http.post(this.baseURL+'/create',contact,{headers:this.headers});
  }
  readContacts(){
    return this.http.get(this.baseURL+'/read',{headers:this.headers});
  }
  updateContact(contact:Contact){
    return this.http.put(this.baseURL+'/update',contact,{headers:this.headers});
  }
  deleteContact(id:string){
    return this.http.delete(this.baseURL+'/delete/'+id,{headers:this.headers});
  }

  setter(contact:Contact){
    this.contact=contact
  }
  getter(){
    return this.contact;
  }

}
