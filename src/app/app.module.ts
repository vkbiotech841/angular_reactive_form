import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormsComponent } from './contact-forms/contact-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppToastComponent } from './app-toast/app-toast.component';
import { AlertComponent } from './alert/alert.component';
import { UserDisplayComponent } from './user-display/user-display.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormsComponent,
    AppToastComponent,
    AlertComponent,
    UserDisplayComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
