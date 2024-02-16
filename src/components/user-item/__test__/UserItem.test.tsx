import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { createRef } from 'react';
import { render, screen } from '@testing-library/react';
import UserItem from '../UserItem';

const mockUser = {
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
};

describe('UserItem component', () => {
  beforeEach(() => {
    const reference = createRef<HTMLLIElement>();
    render(
      <BrowserRouter>
        <UserItem user={mockUser} reference={reference} />
      </BrowserRouter>,
    );
  });

  describe('render', () => {
    it('should render user avatar', () => {
      const avatar = screen.getByAltText(`${mockUser.name} avatar`);
      expect(avatar).toBeInTheDocument();
    });

    it('should render user name', () => {
      const name = screen.getByText(mockUser.name);
      expect(name).toBeInTheDocument();
    });

    it('should render user login', () => {
      const login = screen.getByText(mockUser.login);
      expect(login).toBeInTheDocument();
    });

    it('should render user bio', () => {
      const bio = screen.getByText(mockUser.bio);
      expect(bio).toBeInTheDocument();
    });

    it('should render a link with the right href', () => {
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', `/user/${mockUser.login}`);
    });
  });
});
