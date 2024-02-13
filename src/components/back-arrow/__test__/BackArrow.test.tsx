import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import BackArrow from '../BackArrow';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('BackArrow component', () => {
  beforeEach(() => {
    render(<BackArrow />);
  });

  it('should render a button with aria-label Go Back', () => {
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Go Back');
  });

  it('should call navigate(-1) when the button is clicked', () => {
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockedUsedNavigate).toHaveBeenLastCalledWith(-1);
  });
});
