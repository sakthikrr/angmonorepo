import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ConFormComponent } from './con-form/con-form.component';
@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule,ConFormComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ang-outpt';
  submittedData: { firstName: string | null; lastName: string | null; msg: string | null } | null = null;  // Property to store submitted data
  onsubmit(data: { firstName: string | null; lastName: string | null; msg: string | null }){
    this.submittedData = data;  // Handle the form submission event and store the data
    console.log('Form submitted:', data);
  }
}
