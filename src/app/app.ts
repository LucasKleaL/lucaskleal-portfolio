import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contact } from './components/contact/contact';
import { Education } from './components/education/education';
import { Experience } from './components/experience/experience';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Portfolio } from './components/portfolio/portfolio';
import { ProjectCard } from './components/project-card/project-card';

@Component({
  selector: 'app-root',
  imports: [
    Contact,
    Education,
    Experience,
    Footer,
    Header,
    Portfolio,
    ProjectCard,
    RouterOutlet,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('lucaskleal-portfolio');
}
