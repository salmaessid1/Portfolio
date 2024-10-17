
import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_5rojrjk', 'template_vocz3hr', e.target as HTMLFormElement, 'MenLOkOOO3JnDBx4Y')
      .then(
        (result: EmailJSResponseStatus) => {
          console.log('SUCCESS!', result.status, result.text);
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );
  }
}
