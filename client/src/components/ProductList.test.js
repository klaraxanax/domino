// In a test file (e.g., ProductList.test.js)
import React from 'react';
import { render } from '@testing-library/react';
import ProductList from './ProductList';

test('renders product list', () => {
  const mockProducts = [
    { id: 1, name: 'T-shirt' },
    { id: 2, name: 'Jeans' },
  ];
  jest.spyOn(global, 'fetch').mockResolvedValueOnce({
    json: jest.fn().mockResolvedValueOnce(mockProducts),
  });
  
  const { getByText } = render(<ProductList />);
  
  expect(getByText('Products')).toBeInTheDocument();
  expect(getByText('T-shirt')).toBeInTheDocument();
  expect(getByText('Jeans')).toBeInTheDocument();
});