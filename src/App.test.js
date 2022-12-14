import { render, queryByAttribute} from '@testing-library/react';
import App from './App';

test("renders an h1", () => {
  const { getByText } = render(<App />);

  const h1 = getByText(/My Awesome Blog/);
  
  expect(h1).toHaveTextContent("My Awesome Blog");
});

test("renders an body div", () => {
  const dom = render(<App />);
  const getById = queryByAttribute.bind(null, 'id');

  const bodyDiv = getById(dom.container, 'page-body');

  expect(bodyDiv).toHaveTextContent("Welcome to my blog.");
});