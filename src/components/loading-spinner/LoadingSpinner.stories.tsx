import type { Meta, StoryObj } from '@storybook/react';
import LoadingSpinner from './LoadingSpinner';

const meta = {
  title: 'Static/Loading Spinner',
  component: LoadingSpinner,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LoadingSpinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};
