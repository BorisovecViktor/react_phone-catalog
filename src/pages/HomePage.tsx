import React from 'react';
import BannerSlider from '../components/BannerSlider';
import ProductsСarousel from '../components/ProductsСarousel';
import Categories from '../components/Categories';
import { SORT_BY } from '../constants';
import { carouselSort } from '../helpers/carouselSort';

type Props = {
  products: Product[]
}

const HomePage: React.FC<Props> = ({ products }) => {
  const hotPrices = carouselSort(products, SORT_BY.hotPrice);
  const newBrands = carouselSort(products, SORT_BY.newModels);

  return (
    <>
      <h1 className="visually-hidden">Products Catalog</h1>
      <section className="section slider">
        <BannerSlider />
      </section>
      <section className="section сarousel">
        <ProductsСarousel
          title="Hot prices"
          products={hotPrices}
        />
      </section>
      <section className="section categories">
        <Categories products={products} />
      </section>
      <section className="section сarousel">
        <ProductsСarousel
          title="Brand new models"
          products={newBrands}
        />
      </section>
    </>
  )
};

export default HomePage;
