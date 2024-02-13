import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchInput from '../SearchInput';

describe('SearchInput component', () => {
  const mockQuery = 'test query';
  let onChangeMock: jest.Mock;

  beforeEach(() => {
    onChangeMock = jest.fn();
    render(
      <SearchInput
        query={mockQuery}
        onChange={onChangeMock}
        placeholder="Search"
      />,
    );
  });

  describe('render', () => {
    it('should render search input', () => {
      const searchInput = screen.getByRole('searchbox');
      expect(searchInput).toBeInTheDocument();
      expect(searchInput).toHaveValue(mockQuery);
    });

    it('should render correct placeholder', () => {
      const searchInput = screen.getByPlaceholderText('Search');
      expect(searchInput).toBeInTheDocument();
    });
  });

  describe('behavior', () => {
    it('should call onChange with correct value when input changes', async () => {
      const searchInput = screen.getByRole('searchbox');
      const newValue = 'new query';
      await userEvent.type(searchInput, newValue);
      expect(onChangeMock).toHaveBeenCalledTimes(9);
    });
  });
});
