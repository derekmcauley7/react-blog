import { render, queryByAttribute} from '@testing-library/react';
import AboutPage from './AboutPage';

test("renders an h1", () => {
  const { getByText } = render(<AboutPage />);

  const h1 = getByText(/This is the about page/);
  
  expect(h1).toHaveTextContent("This is the about page");
});