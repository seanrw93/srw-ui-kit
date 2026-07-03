import { Component, inject } from '@angular/core';
import { expect, userEvent, within } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ModalComponent } from '../app/shared/components/modal/modal.component';
import { ButtonComponent } from '../app/shared/components/button/button.component';
import { ModalService } from '../app/shared/services/modal.service';

@Component({
  selector: 'story-modal-default',
  standalone: true,
  imports: [ModalComponent, ButtonComponent],
  template: `
    <srw-button variant="primary" (click)="open()">Open modal</srw-button>
    <srw-modal />
  `,
})
class DefaultTrigger {
  private modal = inject(ModalService);
  open() {
    this.modal.open({ title: 'Confirm action', body: 'Are you sure you want to proceed?', confirmLabel: 'Confirm' });
  }
}

@Component({
  selector: 'story-modal-danger',
  standalone: true,
  imports: [ModalComponent, ButtonComponent],
  template: `
    <srw-button variant="outline" (click)="open()">Open danger modal</srw-button>
    <srw-modal />
  `,
})
class DangerTrigger {
  private modal = inject(ModalService);
  open() {
    this.modal.open({ title: 'Delete item', body: 'This will permanently delete the item.', confirmLabel: 'Delete', danger: true });
  }
}

@Component({
  selector: 'story-modal-both',
  standalone: true,
  imports: [ModalComponent, ButtonComponent],
  template: `
    <div style="display: flex; gap: 12px">
      <srw-button variant="primary" (click)="openDefault()">Open modal</srw-button>
      <srw-button variant="outline" (click)="openDanger()">Open danger modal</srw-button>
    </div>
    <srw-modal />
  `,
})
class BothTrigger {
  private modal = inject(ModalService);
  openDefault() {
    this.modal.open({ title: 'Confirm action', body: 'Are you sure you want to proceed?', confirmLabel: 'Confirm' });
  }
  openDanger() {
    this.modal.open({ title: 'Delete item', body: 'This will permanently delete the item.', confirmLabel: 'Delete', danger: true });
  }
}

const meta: Meta = {
  title: 'Containers/Modal',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [DefaultTrigger, DangerTrigger, BothTrigger],
    }),
  ],
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => ({
    template: `<story-modal-default />`,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /open modal/i });
    await userEvent.click(button);
    await expect(canvas.getByRole('dialog')).toBeInTheDocument();
    const closeButton = canvas.getByRole('button', { name: /close/i });
    await userEvent.click(closeButton);
    await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
  },
};

export const Danger: Story = {
  render: () => ({
    template: `<story-modal-danger />`,
  }),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /open danger modal/i });
    await userEvent.click(button);
    await expect(canvas.getByRole('dialog')).toBeInTheDocument();
    await expect(canvas.getByText('Delete item')).toBeInTheDocument();
  },
};

export const BothVariants: Story = {
  render: () => ({
    template: `<story-modal-both />`,
  }),
};
