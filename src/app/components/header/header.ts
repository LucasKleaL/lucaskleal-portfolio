import { Component } from '@angular/core';
import { RainbowButton } from '../rainbow-button/rainbow-button.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RainbowButton],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
