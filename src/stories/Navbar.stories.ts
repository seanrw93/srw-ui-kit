import type { Meta, StoryObj } from '@storybook/angular';
import { NavbarComponent } from '../app/shared/components/navbar/navbar.component';

const meta: Meta<NavbarComponent> = {
  title: 'Layout/Navbar',
  component: NavbarComponent,
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<NavbarComponent>;

export const Default: Story = {};
