import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  greeting: string;
  greetings: any[];
  title = 'Kli1315-contacts-app';

constructor() {
  this.greeting = 'Hello World';
  this.greetings = [];
  this.name = 'World';
}
onSubmitGreeting() {
  const submittedGreeting = 'Hello, ' + this.name + '!';
  this.greetings.push(submittedGreeting);
}
}

