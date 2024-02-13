import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import SearchBox from './SearchBox';

const meta = {
  title: 'Static/Search Box',
  component: SearchBox,
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
} satisfies Meta<typeof SearchBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
