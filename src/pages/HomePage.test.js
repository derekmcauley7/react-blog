import { render, queryByAttribute} from '@testing-library/react';
import HomePage from './HomePage';

test("renders an h1", () => {
  const { getByText } = render(<HomePage />);

  const h1 = getByText(/Hello, welcome to my blog!/);
  
  expect(h1).toHaveTextContent("Hello, welcome to my blog!");
});