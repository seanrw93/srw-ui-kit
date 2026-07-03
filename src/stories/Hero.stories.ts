import type { Meta, StoryObj } from '@storybook/angular';
import { HeroComponent } from '../app/shared/components/hero/hero.component';

const meta: Meta<HeroComponent> = {
  title: 'Layout/Hero',
  component: HeroComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<HeroComponent>;

export const Default: Story = {};
