import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import BackArrow from './BackArrow';

const meta = {
  title: 'Static/Back Arrow',
  component: BackArrow,
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
} satisfies Meta<typeof BackArrow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
