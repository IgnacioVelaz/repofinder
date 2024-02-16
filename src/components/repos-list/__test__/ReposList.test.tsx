import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import ReposList from '../ReposList';

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

describe('UsersList component', () => {
  beforeEach(() => {
    render(
      <Router>
        <ReposList repos={reposMock} />
      </Router>,
    );
  });

  describe('render', () => {
    it('should render the right amount of user items', () => {
      const ReposItems = screen.getAllByRole('listitem');
      expect(ReposItems.length).toBe(reposMock.length);
    });
  });
});
