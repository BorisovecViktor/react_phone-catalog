const API_URL = 'https://fe-feb20-5.github.io/react_phone-catalog/api';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/products.json`);

  return response.json();
};

export const getDetails = async (productId: string): Promise<ProductDetails> => {
  const res = await fetch(`${API_URL}/products/${productId}.json`);

  return res.json();
}
