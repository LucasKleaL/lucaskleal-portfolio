import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly serviceId = environment.emailjs.serviceId;
  private readonly templateId = environment.emailjs.templateId;
  private readonly publicKey = environment.emailjs.publicKey;

  constructor() {
    emailjs.init(this.publicKey);
  }

  async sendEmail(email: string, message: string): Promise<boolean> {
    try {
      const templateParams = {
        from_email: email,
        message: message,
        to_email: 'lucaskleal222@outlook.com'
      };

      await emailjs.send(this.serviceId, this.templateId, templateParams);
      return true;
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      return false;
    }
  }
}