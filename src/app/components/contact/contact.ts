import { Component } from '@angular/core';
import { RainbowButton } from '../rainbow-button/rainbow-button.component';
import { EmailService } from '../../services/email.service';
import { FormsModule } from '@angular/forms';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-contact',
  imports: [RainbowButton, FormsModule],
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  email = '';
  message = '';
  isLoading = false;

  constructor(private readonly emailService: EmailService, private readonly uiService: UiService) {}

  async sendEmail() {
    if (!this.email || !this.message) {
      this.uiService.showErrorToast('❌ Por favor, preencha todos os campos.');
      return;
    }
    if (!this.email.includes('@')) {
      this.uiService.showErrorToast('❌ E-mail inválido.');
      return;
    }
    if (this.message.length < 10) {
      this.uiService.showErrorToast('❌ Mensagem muito curta. Deve ter pelo menos 10 caracteres.');
      return;
    }

    this.isLoading = true;
    
    try {
      const success = await this.emailService.sendEmail(this.email, this.message);
      
      if (success) {
        this.uiService.showSuccessToast('✅ E-mail enviado com sucesso!');
        this.email = '';
        this.message = '';
      } else {
        this.uiService.showErrorToast('❌ Não foi possível enviar o e-mail. Tente novamente.');
      }
      this.isLoading = false;
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      this.uiService.showErrorToast('❌ Erro ao enviar e-mail. Tente novamente.');
      this.isLoading = false;
    }
  }
}
