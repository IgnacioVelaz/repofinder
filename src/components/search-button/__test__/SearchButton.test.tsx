import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchButton from '../SearchButton';

describe('SearchButton component', () => {
  const mockQuery = 'test query';
  let setSearchParamsMock: jest.Mock;

  beforeEach(() => {
    setSearchParamsMock = jest.fn();
    render(
      <SearchButton query={mockQuery} setSearchParams={setSearchParamsMock} />,
    );
  });

  describe('render', () => {
    it('should render search button', () => {
      const searchButton = screen.getByRole('button');
      expect(searchButton).toBeInTheDocument();
    });

    it('should render correct text', () => {
      const buttonText = screen.getByText(`People with "${mockQuery}"`);
      expect(buttonText).toBeInTheDocument();
    });
  });

  describe('behavior', () => {
    it('should call setSearchParams with correct query when clicked', () => {
      const searchButton = screen.getByRole('button');
      fireEvent.click(searchButton);
      expect(setSearchParamsMock).toHaveBeenCalledWith({ q: mockQuery });
    });
  });
});
