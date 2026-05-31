import { Injectable, signal } from '@angular/core';

export interface ModalConfig {
  title: string;
  body: string;
  confirmLabel?: string;
  danger?: boolean;
}

@Injectable({ providedIn: 'root' })
export class ModalService {
  isOpen = signal(false);
  config = signal<ModalConfig>({ title: '', body: '' });

  open(cfg: ModalConfig) {
    this.config.set(cfg);
    this.isOpen.set(true);
  }

  close() {
    this.isOpen.set(false);
  }
}
