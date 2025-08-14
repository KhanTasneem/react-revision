import { test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ContactForm } from './components/ContactForm';

test('shows "Name is required" when name is empty and blurred', async () => {
  render(<ContactForm />);

  const nameInput = screen.getByPlaceholderText(/name/i);

  fireEvent.focus(nameInput);  // user clicks in
  fireEvent.blur(nameInput);   // user clicks out without typing

  expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
});
