import { Component } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';
import { RainbowButton } from '../rainbow-button/rainbow-button.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCard, RainbowButton],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {

}
