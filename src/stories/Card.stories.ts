import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from '../app/shared/components/card/card.component';

const meta: Meta<CardComponent> = {
  title: 'Containers/Card',
  component: CardComponent,
  args: {
    hasImage: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <srw-card [hasImage]="hasImage">
        <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--light-muted); margin-bottom: 8px">Section label</p>
        <h3 style="margin-bottom: 8px">Card title</h3>
        <p style="color: var(--light-body)">Supporting text for the card.</p>
      </srw-card>
    `,
  }),
};
export default meta;

type Story = StoryObj<CardComponent>;

export const Playground: Story = {};

export const Default: Story = {
  render: () => ({
    template: `
      <srw-card>
        <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--light-muted); margin-bottom: 8px">Section label</p>
        <h3 style="margin-bottom: 8px">Card title goes here</h3>
        <p style="color: var(--light-body)">Supporting text for the card. One or two lines works best.</p>
      </srw-card>
    `,
  }),
};

export const WithImage: Story = {
  render: () => ({
    template: `
      <srw-card [hasImage]="true">
        <div slot="image" style="height: 160px; background: linear-gradient(135deg, #2a2521 0%, #c8b89a44 100%)"></div>
        <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--light-muted); margin-bottom: 8px">Image card</p>
        <h3 style="margin-bottom: 8px">Card with image</h3>
        <p style="color: var(--light-body)">The image slot renders above the body via the slot attribute.</p>
      </srw-card>
    `,
  }),
};

export const Grid: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; max-width: 720px">
        <srw-card>
          <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--light-muted); margin-bottom: 8px">Section label</p>
          <h3 style="margin-bottom: 8px">First card</h3>
          <p style="color: var(--light-body)">Supporting text for the card.</p>
        </srw-card>
        <srw-card>
          <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--light-muted); margin-bottom: 8px">Section label</p>
          <h3 style="margin-bottom: 8px">Second card</h3>
          <p style="color: var(--light-body)">A second card to show the layout in context.</p>
        </srw-card>
      </div>
    `,
  }),
};
