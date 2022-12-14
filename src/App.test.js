import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders about link', () => {
  const { getByText } = render(<App />); 
  const linkElement = getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders articles link', () => {
  const { getByText } = render(<App />); 
  const linkElement = getByText(/articles/i);
  expect(linkElement).toBeInTheDocument();
});
