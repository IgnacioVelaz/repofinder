import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import UsersList from '../UsersList';

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

describe('UsersList component', () => {
  beforeEach(() => {
    const lastItemRef = createRef<HTMLLIElement>();
    render(
      <Router>
        <UsersList users={usersMock} lastItem={lastItemRef} />
      </Router>,
    );
  });

  describe('render', () => {
    it('should render user items', () => {
      const userItems = screen.getAllByRole('listitem');
      expect(userItems.length).toBe(usersMock.length);
    });
  });

  describe('behavior', () => {
    it('should pass the correct reference to the last user item', () => {
      const userItems = screen.getAllByRole('listitem');
      const lastItemRef = userItems[userItems.length - 1];
      expect(lastItemRef).toBeInstanceOf(HTMLLIElement);
    });
  });
});
