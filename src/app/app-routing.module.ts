import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { UklaProjectComponent } from './ukla-project/ukla-project.component';

const routes: Routes = [ 
  {path : '' , component : HomeComponent  },
  {path : 'work' , component : ProjectsComponent  },
  {path : 'project/ukla' , component : UklaProjectComponent  },
];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
