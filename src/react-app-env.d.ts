interface NavLinkType {
  title: string;
  url: string;
}

interface Product {
  age: number;
  id: string;
  type: string;
  imageUrl: string;
  name: string;
  snippet: string;
  price: number;
  discount: number;
  screen: string;
  capacity: string;
  ram: string;
  type: string;
}

interface Category {
  title: string;
  link: string;
  count: number;
}

interface Cart {
  id: string;
  quantity: number;
  product: Product;
}

interface Camera {
  primary: string;
}

interface Connectivity {
  cell: string;
}

interface Display {
  screenResolution: string;
}

interface Hardware {
  cpu: string;
}

interface ProductDetails {
  additionalFeatures: string;
  android: Object;
  availability: string[];
  battery: Object;
  camera: Camera;
  connectivity: Connectivity;
  description: string;
  display: Display;
  hardware: Hardware;
  id: string;
  images: string[];
  name: string;
  sizeAndWeight: Object;
  storage: Object;
}

interface ProductPaths {
  [key: string]: string;
}
