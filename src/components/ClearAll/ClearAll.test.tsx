
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClearAll from './ClearAll';

test('renders ClearAll component and handles click event', () => {
  const handleClearAllMock = jest.fn();

  render(<ClearAll handleClearAll={handleClearAllMock} />);

  // Check if the link is in the document
  const clearLink = screen.getByText(/Clear all/i);
  expect(clearLink).toBeInTheDocument();

  // Simulate a click event
  fireEvent.click(clearLink);

  // Check if the handleClearAll function was called
  expect(handleClearAllMock).toHaveBeenCalled();
});
