import { Component } from '@angular/core';
import { RainbowButton } from '../rainbow-button/rainbow-button.component';

@Component({
  selector: 'app-contact',
  imports: [RainbowButton],
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

}
