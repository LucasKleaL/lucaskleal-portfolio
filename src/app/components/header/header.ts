import { Component } from '@angular/core';
import { RainbowButton } from '../rainbow-button/rainbow-button.component';
import Swal from 'sweetalert2';
import { UiService } from '../../services/ui.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RainbowButton],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  private readonly email = 'lucaskleal222@outlook.com';

  constructor(private readonly uiService: UiService) {}

  public copyEmailToClipboard() {
    navigator.clipboard.writeText(this.email);
    this.uiService.showSuccessToast('✅ Email copiado!');
  }

  public openCurriculum() {
    window.open('/cv-lucas-kusman-leal.pdf', '_blank');
  }
}
