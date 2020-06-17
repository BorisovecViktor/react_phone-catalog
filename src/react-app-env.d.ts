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

interface ProductGalleryProps {
  images: string[];
  title: string;
}

interface ProductDetails {
  additionalFeatures: string;
  android: {
    os: string;
    ui: string;
  };
  availability: string[];
  battery: {
    standbyTime: string;
    talkTime: string;
    type: string;
  };
  camera: {
    features: string[];
    primary: string;
  };
  connectivity: {
    bluetooth: string;
    cell: string;
    gps: boolean;
    infrared: boolean;
    wifi: string;
  };
  description: string;
  display: {
    screenResolution: string;
    screenSize: string;
    touchScreen: boolean;
  };
  hardware: {
    accelerometer: boolean;
    audioJack: string;
    cpu: string;
    fmRadio: boolean;
    physicalKeyboard: boolean;
    usb: string;
  };
  id: string;
  images: string[];
  name: string;
  sizeAndWeight: {
    dimensions: string[];
    weight: string;
  };
  storage: {
    flash: string;
    ram: string;
  };
}

interface ProductPaths {
  [key: string]: string;
}

interface SortTitles {
  [key: string]: string;
}

interface ProductPriceProps {
  price: number;
  discount: number;
  styleSize?: string;
}
