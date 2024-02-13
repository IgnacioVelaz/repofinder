import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import UserItem from './UserItem';

const meta = {
  title: 'Static/User Item',
  component: UserItem,
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
} satisfies Meta<typeof UserItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    user: {
      __typename: 'User',
      login: 'IgnacioVelaz',
      name: 'Ignacio Velazquez',
      avatarUrl:
        'https://avatars.githubusercontent.com/u/58704002?u=f825c938ada681b351743112430e341717903583&v=4',
      bio: 'Software Developer',
      followers: {
        __typename: 'FollowerConnection',
        totalCount: 7,
      },
      repositories: {
        totalCount: 20,
      },
    },
    reference: null,
  },
};
