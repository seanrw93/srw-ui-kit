import type { Meta, StoryObj } from '@storybook/angular';
import { ALinkComponent } from '../app/shared/components/a-link/a-link.component';

const meta: Meta<ALinkComponent> = {
  title: 'Primitives/ALink',
  component: ALinkComponent,
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    size: 'md',
    href: '#',
    disabled: false,
    external: false,
  },
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'outline', 'ghost', 'accent-dark'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  render: (args) => ({
    props: args,
    template: `<srw-a-link [variant]="variant" [size]="size" [href]="href" [disabled]="disabled" [external]="external">Link</srw-a-link>`,
  }),
};
export default meta;

type Story = StoryObj<ALinkComponent>;

export const Playground: Story = {};

export const Variants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center">
        <srw-a-link variant="primary">Primary</srw-a-link>
        <srw-a-link variant="secondary">Secondary</srw-a-link>
        <srw-a-link variant="outline">Outline</srw-a-link>
        <srw-a-link variant="ghost">Ghost</srw-a-link>
        <div style="background: #0e0c0a; padding: 12px; border-radius: 4px">
          <srw-a-link variant="accent-dark">Accent Dark</srw-a-link>
        </div>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: flex-end">
        <srw-a-link variant="primary" size="sm">Small</srw-a-link>
        <srw-a-link variant="primary" size="md">Medium</srw-a-link>
        <srw-a-link variant="primary" size="lg">Large</srw-a-link>
      </div>
    `,
  }),
};

export const External: Story = {
  render: () => ({
    template: `<srw-a-link [external]="true">External link</srw-a-link>`,
  }),
};

export const Disabled: Story = {
  render: () => ({
    template: `<srw-a-link [disabled]="true">Disabled</srw-a-link>`,
  }),
};
