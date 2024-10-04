import { render, fireEvent, screen } from '@testing-library/react';
import StringCalculator from './StringCalculator';


test('renders the input box and button', () => {
  render(<StringCalculator />);
  const inputElement = screen.getByPlaceholderText(/Enter numbers/);
  const buttonElement = screen.getByText(/Calculate/);
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
});

test('displays the result after clicking Calculate', () => {
  render(<StringCalculator />);
  const inputElement = screen.getByPlaceholderText(/Enter numbers/);
  const buttonElement = screen.getByText(/Calculate/);
  
  fireEvent.change(inputElement, { target: { value: '1,2' } });
  fireEvent.click(buttonElement);

  expect(screen.getByText(/Result: 3/)).toBeInTheDocument();
});
