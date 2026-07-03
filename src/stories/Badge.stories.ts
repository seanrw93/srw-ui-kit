import type { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from '../app/shared/components/badge/badge.component';

const meta: Meta<BadgeComponent> = {
  title: 'Primitives/Badge',
  component: BadgeComponent,
  tags: ['autodocs'],
  args: {
    variant: 'neutral',
    dot: false,
  },
  argTypes: {
    variant: { control: 'select', options: ['neutral', 'success', 'warning', 'error', 'info', 'dark'] },
  },
  render: (args) => ({
    props: args,
    template: `<srw-badge [variant]="variant" [dot]="dot">Badge</srw-badge>`,
  }),
};
export default meta;

type Story = StoryObj<BadgeComponent>;

export const Playground: Story = {};

export const Variants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap">
        <srw-badge variant="neutral">Neutral</srw-badge>
        <srw-badge variant="success">Success</srw-badge>
        <srw-badge variant="warning">Warning</srw-badge>
        <srw-badge variant="error">Error</srw-badge>
        <srw-badge variant="info">Info</srw-badge>
        <srw-badge variant="dark">Dark</srw-badge>
      </div>
    `,
  }),
};

export const WithDot: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 8px; flex-wrap: wrap">
        <srw-badge variant="success" [dot]="true">Active</srw-badge>
        <srw-badge variant="warning" [dot]="true">Pending</srw-badge>
        <srw-badge variant="error" [dot]="true">Failed</srw-badge>
        <srw-badge variant="neutral" [dot]="true">Offline</srw-badge>
      </div>
    `,
  }),
};
