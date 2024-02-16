import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Modal from '../Modal';

const childrenMock = <p>Modal children</p>;
const closeModalMock = jest.fn();

describe('Modal Component', () => {
  beforeEach(() => {
    render(
      <Modal closeModal={closeModalMock} title="Modal">
        {childrenMock}
      </Modal>,
    );
  });

  describe('render', () => {
    it('should render a div element with backdrop aria-label and button accessibility', () => {
      const backdrop = screen.getByRole('button', {
        name: 'backdrop',
      });
      expect(backdrop).toBeInTheDocument();
    });
    it('should render a button element with "Close modal" aria-label', () => {
      const button = screen.getByRole('button', {
        name: 'Close modal',
      });
      expect(button).toBeInTheDocument();
    });
    it('should render a paragraph element with "Modal" text', () => {
      const title = screen.getByText('Modal');
      expect(title).toBeInTheDocument();
    });
    it('should render a paragraph element with "Modal children" text', () => {
      const children = screen.getByText('Modal children');
      expect(children).toBeInTheDocument();
    });
  });

  describe('behavior', () => {
    it('should trigger closeModalMock once by clicking the close modal button', () => {
      const button = screen.getByRole('button', {
        name: 'Close modal',
      });
      fireEvent.click(button);
      expect(closeModalMock).toHaveBeenCalledTimes(1);
    });
  });
});
