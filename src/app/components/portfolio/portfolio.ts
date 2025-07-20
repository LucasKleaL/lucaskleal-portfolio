import { Component } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';
import { RainbowButton } from '../rainbow-button/rainbow-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCard, RainbowButton, CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {

  public showAllProjects: boolean = false;
  public INITIAL_PROJECTS_COUNT: number = 4;

  public projects = [
    {
      title: 'Safe Works',
      description: 'Safe Works é um sistema feito para conectar trabalhadores autônomos com clientes, oferecendo uma plataforma para gerenciar serviços, pagamentos e avaliações. Foi desenvolvido para o meu Trabalho de Conclusão de Curso (TCC), em conjunto com meus colegas de faculdade.',
      imageUrl: 'https://raw.githubusercontent.com/Safe-Works/SafeWorks/Readme/public/demo/Desktop/SafeWorks%20Desktop%20Analytics%20Screen.png',
      altDescription: 'Logotipo Safe Works',
      gitHubLink: 'https://github.com/Safe-Works/SafeWorks',
      liveLink: '#',
      techTags: [
        {
          title: 'Typescript',
          icon: 'devicon-typescript-plain colored'
        },
        {
          title: 'Angular',
          icon: 'devicon-angularjs-plain colored'
        },
        {
          title: 'Bootstrap',
          icon: 'devicon-bootstrap-plain colored'
        },
        {
          title: 'Node.js',
          icon: 'devicon-nodejs-plain colored'
        },
        {
          title: 'Express',
          icon: 'devicon-express-original'
        },
        {
          title: 'Firebase',
          icon: 'devicon-firebase-plain colored'
        },
      ],
    },
    {
      title: 'Sollarium',
      description: 'Sollarium foi um projeto desenvolvido para a Olimpíada Brasileira de Satélites (OBSAT). Eu e minha equipe criamos um Cubesat voltado para o monitoramento de atividade solar, desenvolvendo os objetivos e documentação da missão, o sistema embarcado, além deste website para apresentar o projeto e os dados coletados.',
      imageUrl: 'https://raw.githubusercontent.com/LucasKleaL/Sollarium/refs/heads/main/public/demo/sollarium-landing-page.png',
      gitHubLink: 'https://github.com/LucasKleaL/Sollarium',
      liveLink: 'https://sollarium.vercel.app/',
      altDescription: 'Logotipo Sollarium',
      techTags: [
        {
          title: 'JavaScript',
          icon: 'devicon-javascript-plain colored'
        },
        {
          title: 'React',
          icon: 'devicon-react-original colored'
        },
        {
          title: 'Material UI',
          icon: 'devicon-materialui-plain colored'
        },
        {
          title: 'Firebase',
          icon: 'devicon-firebase-plain colored'
        }
      ]
    },
    {
      title: 'Sollarium-Embedded',
      description: 'Sollarium-Embedded é o software embarcado no computador ESP32 do cubesat, desenvolvido em Micropython, para coletar dados dos sensores e armazená-los na memória interna do satélite no formato .CSV, além de transmitir esses dados em tempo real para uma sonda no formato JSON, conforme especificado pela OBSAT.',
      imageUrl: 'https://raw.githubusercontent.com/LucasKleaL/Sollarium/refs/heads/main/public/demo/cubesat-sollarium.png',
      altDescription: 'Logotipo Sollarium',
      gitHubLink: 'https://github.com/LucasKleaL/Sollarium-Embedded',
      liveLink: '#',
      techTags: [
        {
          title: 'MicroPython',
          icon: 'devicon-python-plain colored'
        },
        {
          title: 'ESP32',
          icon: 'bi bi-cpu'
        }
      ]
    },
    {
      title: 'SetUp',
      description: 'SetUp é uma rede social gameficada e no formato de bolha. Foi desenvolvida como um trabalho acadêmico para a disciplina de Experiência Criativa.',
      imageUrl: 'https://raw.githubusercontent.com/LucasKleaL/SetUp/refs/heads/main/public/app-demo/setup_ladingpage.jpg',
      altDescription: 'SetUp Landing Page Preview',
      gitHubLink: 'https://github.com/LucasKleaL/SetUp',
      liveLink: 'https://setup-lucaskleal.vercel.app/',
      techTags: [
        {
          title: 'JavaScript',
          icon: 'devicon-javascript-plain colored'
        },
        {
          title: 'React',
          icon: 'devicon-react-original colored'
        },
        {
          title: 'Material UI',
          icon: 'devicon-materialui-plain colored'
        },
        {
          title: 'Firebase',
          icon: 'devicon-firebase-plain colored'
        }
      ]
    },
  ];

  get displayedProjects() {
    return this.showAllProjects 
      ? this.projects 
      : this.projects.slice(0, this.INITIAL_PROJECTS_COUNT);
  }

  get buttonText() {
    return this.showAllProjects ? 'Mostrar Menos' : 'Mostrar Mais';
  }

  get shouldShowButton() {
    return this.projects.length > this.INITIAL_PROJECTS_COUNT;
  }

  toggleProjects() {
    this.showAllProjects = !this.showAllProjects;
  }

}
