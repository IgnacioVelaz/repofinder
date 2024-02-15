import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import ReposList from './ReposList';

const meta = {
  title: 'Static/Repos List',
  component: ReposList,
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
} satisfies Meta<typeof ReposList>;

export default meta;

type Story = StoryObj<typeof meta>;

const reposMock = [
  {
    __typename: 'SearchResultItemEdge',
    node: {
      __typename: 'Repository',
      name: 'gitdagray',
      description: null,
      url: 'https://github.com/gitdagray/gitdagray',
      stargazerCount: 103,
      primaryLanguage: null,
    },
  },
  {
    __typename: 'SearchResultItemEdge',
    node: {
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
  {
    __typename: 'SearchResultItemEdge',
    node: {
      __typename: 'Repository',
      name: 'react_json_server',
      description: 'This is a description for react_json_server',
      url: 'https://github.com/gitdagray/react_json_server',
      stargazerCount: 8,
      primaryLanguage: {
        __typename: 'Language',
        name: 'JavaScript',
        color: '#f1e05a',
      },
    },
  },
  {
    __typename: 'SearchResultItemEdge',
    node: {
      __typename: 'Repository',
      name: 'easy_peasy_redux',
      description: null,
      url: 'https://github.com/gitdagray/easy_peasy_redux',
      stargazerCount: 5,
      primaryLanguage: {
        __typename: 'Language',
        name: 'JavaScript',
        color: '#f1e05a',
      },
    },
  },
];

export const Base: Story = {
  args: {
    repos: reposMock,
  },
};
