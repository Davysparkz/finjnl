import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders learn react link', () => {
  // ARRANGE
  render(<App />);
  
  // ACT
  const linkElement = screen.getByText(/spending journal/i);

  // ASSERT
  expect(linkElement).toBeInTheDocument();
});
