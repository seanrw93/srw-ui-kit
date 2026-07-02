import type { Meta, StoryObj } from '@storybook/angular';
import { FaqAccordionComponent } from '../app/shared/components/faq-accordion/faq-accordion.component';

const meta: Meta<FaqAccordionComponent> = {
  title: 'Patterns/FaqAccordion',
  component: FaqAccordionComponent,
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj<FaqAccordionComponent>;

export const Default: Story = {};
