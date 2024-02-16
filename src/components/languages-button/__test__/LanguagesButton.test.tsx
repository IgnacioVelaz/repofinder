import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import LanguagesButton from '../LanguagesButton';

const languagesMock = ['JavaScript', 'TypeScript', 'Java'];
const openModalMock = jest.fn();

describe('Languages Button component', () => {
  describe('render', () => {
    it('should render a button with text TypeScript', () => {
      render(
        <LanguagesButton
          openModal={openModalMock}
          userLanguages={languagesMock}
          allReposLoaded
          selectedLanguage="TypeScript"
        />,
      );
      const button = screen.getByRole('button', {
        name: 'TypeScript',
      });
      expect(button).toBeInTheDocument();
    });
    it('should render a button with text JavaScript', () => {
      render(
        <LanguagesButton
          openModal={openModalMock}
          userLanguages={languagesMock}
          allReposLoaded
          selectedLanguage="JavaScript"
        />,
      );
      const button = screen.getByRole('button', {
        name: 'JavaScript',
      });
      expect(button).toBeInTheDocument();
    });
    it('should render a button with text "Language"', () => {
      render(
        <LanguagesButton
          openModal={openModalMock}
          userLanguages={['JavaScript', 'TypeScript', 'Go']}
          allReposLoaded
          selectedLanguage=""
        />,
      );
      const button = screen.getByRole('button', {
        name: 'Language',
      });
      expect(button).toBeInTheDocument();
    });
    it('should render a span with text "User languages not available."', () => {
      render(
        <LanguagesButton
          openModal={openModalMock}
          userLanguages={[]}
          allReposLoaded
          selectedLanguage=""
        />,
      );
      const span = screen.getByText('User languages not available.');
      expect(span).toBeInTheDocument();
    });
    it('should render a span with text "Getting user languages..."', () => {
      render(
        <LanguagesButton
          openModal={openModalMock}
          userLanguages={[]}
          allReposLoaded={false}
          selectedLanguage=""
        />,
      );
      const span = screen.getByText('Getting user languages...');
      expect(span).toBeInTheDocument();
    });
  });
  describe('behavior', () => {
    it('should trigger "openModal" function once when clicked', async () => {
      render(
        <LanguagesButton
          openModal={openModalMock}
          userLanguages={['TypeScript', 'Go', 'CSS']}
          allReposLoaded
          selectedLanguage="TypeScript"
        />,
      );
      const button = screen.getByRole('button', {
        name: 'TypeScript',
      });

      await fireEvent.click(button);
      expect(openModalMock).toHaveBeenCalledTimes(1);
    });
  });
});
