import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ModalService } from '../../shared/services/modal.service';

@Component({
  selector: 'srw-modal-page',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './modal-page.component.html',
  styleUrl: './modal-page.component.scss',
})
export class ModalPageComponent {
  readonly modal = inject(ModalService);

  openDefault(): void {
    this.modal.open({
      title: 'Confirm action',
      body: 'Are you sure you want to proceed? This cannot be undone.',
      confirmLabel: 'Confirm',
    });
  }

  openDanger(): void {
    this.modal.open({
      title: 'Delete item',
      body: 'This will permanently delete the item. This action cannot be undone.',
      confirmLabel: 'Delete',
      danger: true,
    });
  }
}
