import { render, queryByAttribute} from '@testing-library/react';
import ArticlesListPage from './ArticlesListPage';

test("renders an h1", () => {
  const { getByText } = render(<ArticlesListPage />);

  const h1 = getByText(/The Fastest Way to Learn React/);
  
  expect(h1).toHaveTextContent("The Fastest Way to Learn React");
});