import { render, queryByAttribute} from '@testing-library/react';
import ArticlesListPage from './ArticlesListPage';

test("renders an h1", () => {
  const { getByText } = render(<ArticlesListPage />);

  const h1 = getByText(/This is the Articles List page/);
  
  expect(h1).toHaveTextContent("This is the Articles List page");
});