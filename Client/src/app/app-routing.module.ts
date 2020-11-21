import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UpdateanddeleteComponent } from './components/updateanddelete/updateanddelete.component';

const routes: Routes = [
  {path:'',component:ListComponent},
  {path:'createUpdate',component:UpdateanddeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
