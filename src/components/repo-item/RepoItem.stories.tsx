import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import RepoItem from './RepoItem';

const meta = {
  title: 'Static/Repo Item',
  component: RepoItem,
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
} satisfies Meta<typeof RepoItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    repo: {
      __typename: 'Repository',
      name: 'react_redux_toolkit',
      description: 'This is a description for react redux toolkit',
      url: 'https://github.com/gitdagray/react_redux_toolkit',
      stargazerCount: 640,
      primaryLanguage: {
        __typename: 'Language',
        name: 'JavaScript',
        color: '#f1e05a',
      },
    },
  },
};
