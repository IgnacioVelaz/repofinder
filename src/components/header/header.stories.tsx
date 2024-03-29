import type { Meta, StoryObj } from '@storybook/react';

import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

const meta = {
  title: 'Static/Header',
  component: Header,
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
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
