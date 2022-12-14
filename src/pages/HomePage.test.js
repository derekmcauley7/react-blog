import { render, queryByAttribute} from '@testing-library/react';
import HomePage from './HomePage';

test("renders an h1", () => {
  const { getByText } = render(<HomePage />);

  const h1 = getByText(/This is the home page/);
  
  expect(h1).toHaveTextContent("This is the home page");
});