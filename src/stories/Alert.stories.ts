import type { Meta, StoryObj } from '@storybook/angular';
import { AlertComponent } from '../app/shared/components/alert/alert.component';

const meta: Meta<AlertComponent> = {
  title: 'Primitives/Alert',
  component: AlertComponent,
  args: {
    variant: 'info',
  },
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
  },
  render: (args) => ({
    props: args,
    template: `<srw-alert [variant]="variant">This is an alert message.</srw-alert>`,
  }),
};
export default meta;

type Story = StoryObj<AlertComponent>;

export const Playground: Story = {};

export const Variants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; max-width: 560px">
        <srw-alert variant="info">Account settings saved. Changes take effect on next page load.</srw-alert>
        <srw-alert variant="success">Payment confirmed. Receipt sent to your email.</srw-alert>
        <srw-alert variant="warning">Session expires in 10 minutes. Save your work.</srw-alert>
        <srw-alert variant="error">Couldn't save changes. Check your connection and try again.</srw-alert>
      </div>
    `,
  }),
};
