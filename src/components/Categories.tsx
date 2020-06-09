import React from 'react';
import { FILTERS } from '../constants';
import { categoriesFilter } from '../helpers/categoriesFilter';
import Category from './Category';

type Props = {
  products: Product[];
}

const Categories: React.FC<Props> = ({ products }) => {
  const filtredPhonesCount = categoriesFilter(products, FILTERS.phones)
    .length
  const filtredTabletsCount = categoriesFilter(products, FILTERS.tablets)
    .length
  const filtredAccessoriesCount = categoriesFilter(products, FILTERS.accessories)
    .length

  const categories: Category[] = [
    { title: 'Mobile phones', link: 'phones', count: filtredPhonesCount },
    { title: 'Tablets', link: 'tablets', count: filtredTabletsCount },
    { title: 'Accessories', link: 'accessories', count: filtredAccessoriesCount },
  ];

  return (
    <>
      <h2 className="categories__header">Shop by category</h2>
      <ul className="categories__list">
        {categories.map(({ title, link, count }) => (
          <li className="categories__item" key={title}>
            <Category
              title={title}
              link={link}
              count={count}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Categories;

