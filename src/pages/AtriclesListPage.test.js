import { render, queryByAttribute} from '@testing-library/react';
import ArticlesListPage from './ArticlesListPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

test("renders an h1 from mock data", () => {
  const { getByText } = render(<BrowserRouter> <ArticlesListPage /> </BrowserRouter>);

  const h1 = getByText(/The Fastest Way to Learn React/);
  
  expect(h1).toHaveTextContent("The Fastest Way to Learn React");
});