import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InfoComponent } from './info/info.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { AnimatedTextComponent } from './animated-text/animated-text.component';
import { WorksComponent } from './works/works.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { FormcontactComponent } from './form/formcontact/formcontact.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { UklaProjectComponent } from './ukla-project/ukla-project.component';
import { ProblemSolvingComponent } from './problem-solving/problem-solving.component';

@NgModule({
  declarations: [		
    AppComponent,
    NavbarComponent,
    InfoComponent,
    CarouselComponent,
    FooterComponent,
    AnimatedTextComponent,
    WorksComponent,
    NotFoundComponent,
    HomeComponent,
    ProjectsComponent , 
    FormcontactComponent,
    UklaProjectComponent,
      ProblemSolvingComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent]
})
export class AppModule { }
