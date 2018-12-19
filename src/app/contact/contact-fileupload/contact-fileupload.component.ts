import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-fileupload',
  templateUrl: './contact-fileupload.component.html',
  styleUrls: ['./contact-fileupload.component.css']
})
export class ContactFileuploadComponent implements OnInit {

  onFileSelected(event) {
console.log(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
