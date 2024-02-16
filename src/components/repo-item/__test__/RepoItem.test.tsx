import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RepoItem from '../RepoItem';

const repoMock = {
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
};

describe('RepoItem component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <RepoItem repo={repoMock} />
      </BrowserRouter>,
    );
  });

  describe('Render', () => {
    it('should render a heading with the text "react_redux_toolkit"', () => {
      const heading = screen.getByRole('heading', {
        name: 'react_redux_toolkit',
      });
      expect(heading).toBeInTheDocument();
    });
    it('should render an anchor with the href "https://github.com/gitdagray/react_redux_toolkit"', () => {
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute(
        'href',
        'https://github.com/gitdagray/react_redux_toolkit',
      );
    });
    it('should render list item', () => {
      const listItem = screen.getByRole('listitem');
      expect(listItem).toBeInTheDocument();
    });
    it('should render a paragraph with text "This is a description for react redux toolkit"', () => {
      const paragraph = screen.getByText(
        'This is a description for react redux toolkit',
      );
      expect(paragraph).toBeInTheDocument();
    });
    it('should render a paragraph with text "640"', () => {
      const paragraph = screen.getByText('640');
      expect(paragraph).toBeInTheDocument();
    });
    it('should render a paragraph with text "JavaScript"', () => {
      const paragraph = screen.getByText('JavaScript');
      expect(paragraph).toBeInTheDocument();
    });
  });
});
