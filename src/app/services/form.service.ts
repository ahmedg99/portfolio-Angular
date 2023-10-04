import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor(private http: HttpClient , private toastr: ToastrService) { }

  sendRequest(body : any) {
    console.log('Sending message...');
     const url = 'https://contactme-three.vercel.app/api/apps';
 

 
    // Make the POST request
    this.http.post(url, body).subscribe(
      (response) => {
        // Handle the response here
        console.log('Response:', response);
        this.toastr.success('Your Message sent successfully');

      },
      (error) => {
        // Handle errors here
        console.error('Error:', error);
         console.log(error.status);
         this.toastr.error('Your Message not sent successfully');
      }
    );
  
}
}