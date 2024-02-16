import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import LanguagesList from '../LanguagesList';

const languagesMock = ['JavaScript', 'Go', 'C++'];
const selectLanguageMock = jest.fn();

describe('LanguagesList component', () => {
  beforeEach(() => {
    render(
      <Router>
        <LanguagesList
          languages={languagesMock}
          selectLanguage={selectLanguageMock}
        />
      </Router>,
    );
  });

  describe('render', () => {
    it('should render language items', () => {
      const languageItems = screen.getAllByRole('listitem');
      expect(languageItems.length).toBe(languagesMock.length + 1);
    });
    it('should render language item with text "All"', () => {
      const languageItem = screen.getByRole('button', {
        name: 'All',
      });
      expect(languageItem).toBeInTheDocument();
    });
    it('should render language item with text "JavaScript"', () => {
      const languageItem = screen.getByRole('button', {
        name: 'JavaScript',
      });
      expect(languageItem).toBeInTheDocument();
    });
    it('should render language item with text "Go"', () => {
      const languageItem = screen.getByRole('button', {
        name: 'Go',
      });
      expect(languageItem).toBeInTheDocument();
    });
    it('should render language item with text "C++"', () => {
      const languageItem = screen.getByRole('button', {
        name: 'C++',
      });
      expect(languageItem).toBeInTheDocument();
    });
  });

  describe('behavior', () => {
    it('should trigger the selectLanguageMock function once', async () => {
      const languageItem = screen.getByRole('button', {
        name: 'JavaScript',
      });
      await fireEvent.click(languageItem);

      expect(selectLanguageMock).toHaveBeenCalledTimes(1);
    });
  });
});
