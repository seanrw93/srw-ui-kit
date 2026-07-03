import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { RevealDirective } from '../app/shared/directives/reveal.directive';

const meta: Meta = {
  title: 'Utility/Reveal',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [RevealDirective],
    }),
  ],
  argTypes: {
    revealFrom: { control: 'select', options: ['default', 'right'] },
    revealDelay: { control: { type: 'number', min: 0, max: 1000, step: 50 } },
  },
};
export default meta;

type Story = StoryObj;

export const Playground: Story = {
  args: { revealFrom: 'default', revealDelay: 0 },
  render: (args) => ({
    props: args,
    template: `
      <div srwReveal [revealFrom]="revealFrom" [revealDelay]="revealDelay"
           style="padding: 32px; background: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius-md)">
        <h3 style="margin-bottom: 8px">Reveal</h3>
        <p style="color: var(--light-body)">Re-mount the story to replay the animation.</p>
      </div>
    `,
  }),
};

export const FadeIn: Story = {
  args: { revealFrom: 'default', revealDelay: 0 },
  render: (args) => ({
    props: args,
    template: `
      <div srwReveal [revealFrom]="revealFrom" [revealDelay]="revealDelay"
           style="padding: 32px; background: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius-md)">
        <h3 style="margin-bottom: 8px">Fade in</h3>
        <p style="color: var(--light-body)">This element fades in when it enters the viewport. Re-mount the story to replay.</p>
      </div>
    `,
  }),
};

export const SlideFromRight: Story = {
  args: { revealFrom: 'right', revealDelay: 0 },
  render: (args) => ({
    props: args,
    template: `
      <div srwReveal [revealFrom]="revealFrom" [revealDelay]="revealDelay"
           style="padding: 32px; background: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius-md)">
        <h3 style="margin-bottom: 8px">Slide from right</h3>
        <p style="color: var(--light-body)">Slides in from the right. Re-mount the story to replay.</p>
      </div>
    `,
  }),
};

export const StaggeredGrid: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px">
        <div srwReveal [revealDelay]="0"
             style="padding: 24px; background: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius-md)">
          <p style="color: var(--light-muted); font-size: 12px; margin-bottom: 4px">delay 0ms</p>
          <p style="color: var(--light-body)">Staggered item</p>
        </div>
        <div srwReveal [revealDelay]="70"
             style="padding: 24px; background: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius-md)">
          <p style="color: var(--light-muted); font-size: 12px; margin-bottom: 4px">delay 70ms</p>
          <p style="color: var(--light-body)">Staggered item</p>
        </div>
        <div srwReveal [revealDelay]="140"
             style="padding: 24px; background: var(--card-bg); border: 1px solid var(--card-border); border-radius: var(--radius-md)">
          <p style="color: var(--light-muted); font-size: 12px; margin-bottom: 4px">delay 140ms</p>
          <p style="color: var(--light-body)">Staggered item</p>
        </div>
      </div>
    `,
  }),
};
