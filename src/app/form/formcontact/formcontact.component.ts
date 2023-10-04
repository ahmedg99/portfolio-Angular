import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-formcontact',
  templateUrl: './formcontact.component.html',
  styleUrls: ['./formcontact.component.css'],
})
export class FormcontactComponent {
  // Define properties to store form input values

  checkoutForm = this.formBuilder.group({
    title: '',
    email: '',
    subject: '',
    message: '',
  });
  constructor(
    private formservice: FormService,
    private formBuilder: FormBuilder
  ) {}

  // Function to send the POST request
  sendMessage() {

    // Get the form inputs
    const name = this.checkoutForm.get('title')?.value;
    const email = this.checkoutForm.get('email')?.value;
    const subject = this.checkoutForm.get('subject')?.value;
    const body = this.checkoutForm.get('message')?.value;

    // Create the body of the request
    const body1 = {
      name,
      email,
      subject,
      body,
    };

    // Send the request
    this.formservice.sendRequest(body1);


    console.log('Sending message...');
  }
}
