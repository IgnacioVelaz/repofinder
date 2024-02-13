import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import SearchInput from './SearchInput';

const meta = {
  title: 'Static/Search Input',
  component: SearchInput,
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
} satisfies Meta<typeof SearchInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    placeholder: 'Search in repofindr',
    query: 'query',
    onChange: () => {},
  },
};
