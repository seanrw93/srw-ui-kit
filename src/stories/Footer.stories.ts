import type { Meta, StoryObj } from '@storybook/angular';
import { FooterComponent } from '../app/shared/components/footer/footer.component';

const meta: Meta<FooterComponent> = {
  title: 'Layout/Footer',
  component: FooterComponent,
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<FooterComponent>;

export const Default: Story = {};
