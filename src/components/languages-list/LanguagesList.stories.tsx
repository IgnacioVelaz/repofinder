import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import LanguagesList from './LanguagesList';

const meta = {
  title: 'Static/Languages List',
  component: LanguagesList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof LanguagesList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    languages: ['JavaScript', 'TypeScript', 'CSS', 'C'],
    selectLanguage: () => {},
  },
};
