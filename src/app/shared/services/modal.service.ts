import { Injectable, signal } from '@angular/core';

export interface ModalConfig {
  title: string;
  body: string;
  confirmLabel?: string;
  danger?: boolean;
}

@Injectable({ providedIn: 'root' })
export class ModalService {
  readonly isOpen = signal(false);
  readonly config = signal<ModalConfig>({ title: '', body: '' });

  open(cfg: ModalConfig): void {
    this.config.set(cfg);
    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);
  }
}
