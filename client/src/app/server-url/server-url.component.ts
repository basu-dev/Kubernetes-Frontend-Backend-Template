import { Component, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-server-url',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './server-url.component.html',
  styleUrl: './server-url.component.scss'
})
export class ServerUrlComponent {

   url = model('');
  
   urlEmitted = output<string>();

  

}
