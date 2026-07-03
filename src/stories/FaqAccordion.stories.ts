import { expect, userEvent, within } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/angular';
import { FaqAccordionComponent } from '../app/shared/components/faq-accordion/faq-accordion.component';

const meta: Meta<FaqAccordionComponent> = {
  title: 'Patterns/FaqAccordion',
  component: FaqAccordionComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};
export default meta;

type Story = StoryObj<FaqAccordionComponent>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [firstItem] = canvas.getAllByRole('button');
    await userEvent.click(firstItem);
    await expect(firstItem).toHaveAttribute('aria-expanded', 'true');
    await userEvent.click(firstItem);
    await expect(firstItem).toHaveAttribute('aria-expanded', 'false');
  },
};
