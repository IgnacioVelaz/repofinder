import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { createRef } from 'react';
import UsersList from './UsersList';

const meta = {
  title: 'Static/Users List',
  component: UsersList,
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
} satisfies Meta<typeof UsersList>;

export default meta;

type Story = StoryObj<typeof meta>;

const usersMock = [
  {
    __typename: 'SearchResultItemEdge',
    node: {
      __typename: 'User',
      login: 'IgnacioVelaz',
      name: 'Ignacio Velazquez',
      avatarUrl:
        'https://avatars.githubusercontent.com/u/58704002?u=f825c938ada681b351743112430e341717903583&v=4',
      bio: 'Software Developer',
      id: 'MDQ6VXNlcjU4NzA0MDAy',
      followers: {
        __typename: 'FollowerConnection',
        totalCount: 7,
      },
      repositories: {
        __typename: 'RepositoryConnection',
        totalCount: 20,
      },
    },
  },
  {
    __typename: 'SearchResultItemEdge',
    node: {
      __typename: 'User',
      login: 'IgnacioVelazquez92',
      name: 'Ignacio Velazquez',
      avatarUrl:
        'https://avatars.githubusercontent.com/u/69434969?u=a6d4f0fa364200fcc8b321264434d110a64baf99&v=4',
      bio: '',
      id: 'MDQ6VXNlcjY5NDM0OTY5',
      followers: {
        __typename: 'FollowerConnection',
        totalCount: 1,
      },
      repositories: {
        __typename: 'RepositoryConnection',
        totalCount: 25,
      },
    },
  },
  {
    __typename: 'SearchResultItemEdge',
    node: {
      __typename: 'User',
      login: 'ignaciovelazquez',
      name: 'Ignacio Velazquez',
      avatarUrl: 'https://avatars.githubusercontent.com/u/17604679?v=4',
      bio: '',
      id: 'MDQ6VXNlcjE3NjA0Njc5',
      followers: {
        __typename: 'FollowerConnection',
        totalCount: 0,
      },
      repositories: {
        __typename: 'RepositoryConnection',
        totalCount: 1,
      },
    },
  },
];

const lastItemRef = createRef<HTMLLIElement>();

export const Base: Story = {
  args: {
    users: usersMock,
    lastItem: lastItemRef,
  },
};
