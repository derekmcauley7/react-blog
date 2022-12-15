import { render, queryByAttribute} from '@testing-library/react';
import AboutPage from './AboutPage';

test("renders an h1", () => {
  const { getByText } = render(<AboutPage />);

  const h1 = getByText(/about this blog/i);
  
  expect(h1).toHaveTextContent("About This Blog");
});