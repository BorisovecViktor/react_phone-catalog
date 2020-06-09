const API_URL = 'https://mate-academy.github.io/react_phone-catalog/api/products.json';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(API_URL);

  return response.json();
};
