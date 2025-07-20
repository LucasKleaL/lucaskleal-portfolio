import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type RainbowButtonVariant = 'default' | 'outline';
export type RainbowButtonSize = 'default' | 'sm' | 'lg' | 'icon';

@Component({
  selector: 'app-rainbow-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rainbow-button.component.html',
  styleUrl: './rainbow-button.component.scss'
})
export class RainbowButton {
  @Input() variant: RainbowButtonVariant = 'default';
  @Input() size: RainbowButtonSize = 'default';
  @Input() disabled: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() class: string = '';

  get buttonClasses(): string {
    const baseClasses = [
      'rainbow-button',
      'relative',
      'cursor-pointer',
      'group',
      'transition-all',
      'animate-rainbow',
      'inline-flex',
      'items-center',
      'justify-center',
      'gap-2',
      'shrink-0',
      'rounded-sm',
      'outline-none',
      'focus-visible:ring-[3px]',
      'text-sm',
      'font-medium',
      'whitespace-nowrap',
      'disabled:pointer-events-none',
      'disabled:opacity-50'
    ];

    const variantClasses = this.getVariantClasses();

    const sizeClasses = this.getSizeClasses();

    return [...baseClasses, ...variantClasses, ...sizeClasses, this.class].join(' ');
  }

  private getVariantClasses(): string[] {
    switch (this.variant) {
      case 'outline':
        return ['rainbow-button--outline'];
      case 'default':
      default:
        return ['rainbow-button--default'];
    }
  }

  private getSizeClasses(): string[] {
    switch (this.size) {
      case 'sm':
        return ['rainbow-button--sm'];
      case 'lg':
        return ['rainbow-button--lg'];
      case 'icon':
        return ['rainbow-button--icon'];
      case 'default':
      default:
        return ['rainbow-button--default-size'];
    }
  }
}
