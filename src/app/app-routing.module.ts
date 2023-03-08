import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [ 
  {path : '' , component : HomeComponent  },
  {path : 'work' , component : WorksComponent},
  { path : '**' ,component :  NotFoundComponent }
  

];
//{ path : '**' ,component :  NotFountComponent }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
