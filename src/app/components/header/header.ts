import { Component } from '@angular/core';
import { RainbowButton } from '../rainbow-button/rainbow-button.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RainbowButton],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  private readonly email = 'lucaskleal222@outlook.com';

  public copyEmailToClipboard() {
    this.showSuccessToast();
  }

  private showSuccessToast() {
    Swal.fire({
      toast: true,
      position: 'top',
      icon: 'success',
      title: '✅ Email copiado!',
      showConfirmButton: false,
      timer: 2500,
      width: '300px',
      background: '#059669',
      color: '#fff',
      customClass: {
        popup: 'colored-toast'
      }
    });
  }

}
