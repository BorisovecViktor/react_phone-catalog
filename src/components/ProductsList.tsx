import React, { useMemo } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import ProductCard from './ProductCard';
import './ProductsList.scss';
import { SORT_BY } from '../constants';
import Pagination from './Pagination';


type Props = {
  products: Product[];
  filter: string;
};

const ProductsList: React.FC<Props> = ({ products, filter }) => {
  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);
  const sortBy = searchParams.get('sort') || SORT_BY.releaseDate;
  const page = +(searchParams.get('page') || 1);

  const currentCatalogProducts = useMemo(() => {
    const result = products.filter(product => product.type === filter);

    switch (sortBy) {
      case SORT_BY.priceAsc:
        result.sort((a, b) => a.price - b.price);
        break;
      case SORT_BY.priceDesc:
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        result.sort((a, b) => a.age - b.age);
        break;
    }

    return result;
  }, [products, filter, sortBy]);

  const perPage = +(searchParams.get('show') || currentCatalogProducts.length);

  const currentPageProducts = useMemo(() => {
    let endId = (perPage * page) - 1;
    const startId = page === 1 ? page - 1 : (endId - perPage) + 1;

    if (endId > currentCatalogProducts.length) {
      endId = currentCatalogProducts.length;
    }

    const result = currentCatalogProducts
      .filter((_product, index) => index >= startId && index <= endId);

    return result;
  }, [perPage, page, currentCatalogProducts]);

  const showOptions = useMemo(() => {
    const productsAmount = currentCatalogProducts.length;
    const options = [];

    for (let i = 4; i < productsAmount; i *= 2) {
      options.push(i);
    }

    return options.length === 0 ? [4] : options;
  }, [currentCatalogProducts]);

  return (
    <div className="products">
      <div className="products__subtitle">
        {products && `${currentCatalogProducts.length} models`}
      </div>
      <div className="products__filters">
        <div className="products__filter">
          <div className="products__filter-title">
            Sort by
          </div>
          <select
            value={sortBy}
            className="products__filter-select"
            onChange={
              ({ target }) => {
                searchParams.set('sort', target.value);
                searchParams.set('page', String(1));
                history.push({
                  search: searchParams.toString(),
                });
              }
            }
          >
            <option value={SORT_BY.releaseDate}>
              Newest Arrivals
            </option>
            <option value={SORT_BY.priceAsc}>
              Price: Low to High
            </option>
            <option value={SORT_BY.priceDesc}>
              Price: High to Low
            </option>
          </select>
        </div>
        <div className="products__filter">
          <div className="products__filter-title">
            Items on page
          </div>
          <select
            value={perPage}
            onChange={({ target }) => {
              searchParams.set('show', target.value);
              searchParams.set('page', String(1));
              history.push({
                search: searchParams.toString(),
              });
            }}
            className="products__filter-select"
          >
            <option
              value={products.length}
            >
              All
            </option>
            {showOptions.map(show => (
              <option key={show}>{show}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="products__list">
        {currentPageProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {currentCatalogProducts.length !== currentPageProducts.length && (
        <Pagination
          total={currentCatalogProducts.length}
          perPage={perPage}
          page={page}
        />
      )}
    </div>
  );
};

export default ProductsList;
