import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UiService {

    constructor() { }

    public showSuccessToast(message: string = '✅ Ação realizada com sucesso!') {
        Swal.fire({
            toast: true,
            position: 'top',
            icon: 'success',
            title: message,
            showConfirmButton: false,
            timer: 2500,
            width: '35rem',
            background: '#059669',
            color: '#fff',
            customClass: {
                popup: 'colored-toast'
            }
        });
    }

    public showErrorToast(message: string = '❌ Ocorreu um erro!') {
        Swal.fire({
            toast: true,
            position: 'top',
            icon: 'error',
            title: message,
            showConfirmButton: false,
            timer: 2500,
            width: '35rem',
            background: '#DC2626',
            color: '#fff',
            customClass: {
                popup: 'colored-toast'
            }
        });
    }
}