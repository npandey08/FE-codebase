import { render, screen } from '@testing-library/react';
import App from './components/App.js';

test('renders h1 link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Restaurant Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders h1 header', () => {
  render(<App />);
  const linkElement2 = screen.getByText(/Railman Caterings/i);
  expect(linkElement2).toBeInTheDocument();
});
