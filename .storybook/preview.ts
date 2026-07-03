import type { Preview } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#0e0c0a' },
        { name: 'card', value: '#f5f2ee' },
      ],
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
