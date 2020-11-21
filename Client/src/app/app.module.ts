import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {  UpdateanddeleteComponent } from './components/updateanddelete/updateanddelete.component';
import { ContactService} from './services/contact.service';

import{HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavbarComponent,
    UpdateanddeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
