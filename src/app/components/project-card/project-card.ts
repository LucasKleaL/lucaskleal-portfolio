import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

interface TechTag {
  title: string;
  icon: string;
}

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard {

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() altDescription: string = '';
  @Input() gitHubLink: string = '';
  @Input() liveLink: string = '';
  @Input() techTags: TechTag[] = [];

}
