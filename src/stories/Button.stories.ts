import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../app/shared/components/button/button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Primitives/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
  },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'outline', 'ghost', 'accent-dark'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  render: (args) => ({
    props: args,
    template: `<srw-button [variant]="variant" [size]="size" [disabled]="disabled" [loading]="loading">Button</srw-button>`,
  }),
};
export default meta;

type Story = StoryObj<ButtonComponent>;

export const Playground: Story = {};

export const Variants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center">
        <srw-button variant="primary">Primary</srw-button>
        <srw-button variant="secondary">Secondary</srw-button>
        <srw-button variant="outline">Outline</srw-button>
        <srw-button variant="ghost">Ghost</srw-button>
        <div style="background: #0e0c0a; padding: 12px; border-radius: 4px">
          <srw-button variant="accent-dark">Accent Dark</srw-button>
        </div>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: flex-end">
        <srw-button variant="primary" size="sm">Small</srw-button>
        <srw-button variant="primary" size="md">Medium</srw-button>
        <srw-button variant="primary" size="lg">Large</srw-button>
      </div>
    `,
  }),
};

export const Loading: Story = {
  render: () => ({
    template: `<srw-button [loading]="true">Loading</srw-button>`,
  }),
};

export const Disabled: Story = {
  render: () => ({
    template: `<srw-button [disabled]="true">Disabled</srw-button>`,
  }),
};
