import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import SearchButton from './SearchButton';

const meta = {
  title: 'Static/Search Button',
  component: SearchButton,
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
} satisfies Meta<typeof SearchButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    query: 'query',
  },
};
