import { expect, userEvent, within } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from '../app/shared/components/input/input.component';

const meta: Meta<InputComponent> = {
  title: 'Primitives/Input',
  component: InputComponent,
  tags: ['autodocs'],
  args: {
    label: 'Label',
    placeholder: 'Placeholder text',
    helperText: '',
    error: '',
    disabled: false,
  },
};
export default meta;

type Story = StoryObj<InputComponent>;

export const Playground: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    await userEvent.click(input);
    await userEvent.type(input, 'Hello, World!');
    await expect(input).toHaveValue('Hello, World!');
  },
};

export const WithHelper: Story = {
  args: {
    label: 'Full name',
    placeholder: 'Sean Roennau-Wergen',
    helperText: 'Enter your full name as it appears on your ID.',
  },
};

export const Error: Story = {
  args: {
    label: 'Email address',
    placeholder: 'hello@example.com',
    error: 'Please enter a valid email address.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Read-only field',
    placeholder: 'Cannot edit this',
    helperText: 'This field is disabled.',
    disabled: true,
  },
};
