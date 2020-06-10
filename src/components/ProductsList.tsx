import React, { useMemo, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './ProductsList.scss';
import * as store from '../store';
import { setFilterBy } from '../store/filter';
import { setSortBy } from '../store/sort';
import { SORT_BY } from '../constants';
import { setPage, setPerPage } from '../store/pagination';
import ProductCard from './ProductCard';
import Pagination from './Pagination';

type Props = {
  filter: string;
};

const ProductsList: React.FC<Props> = ({ filter }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const categoryLength = useSelector(store.getCategoryLength);
  const searchParams = new URLSearchParams(location.search);
  const sortBy = searchParams.get('sortBy') || SORT_BY.releaseDate;
  const page = +(searchParams.get('page') || 1);
  const perPage = +(searchParams.get('perPage') || categoryLength);
  const visibleProducts = useSelector(store.getVisibleProducts);

  useEffect(() => {
    dispatch(setSortBy(sortBy));
  }, [dispatch, sortBy]);

  useEffect(() => {
    dispatch(setPage(page));
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(setFilterBy(filter));
  }, [dispatch, filter]);

  useEffect(() => {
    dispatch(setPerPage(perPage));
  }, [dispatch, perPage]);

  const perPageOptions = useMemo(() => {
    const productsAmount = categoryLength;
    const options = [];

    for (let i = 4; i < productsAmount; i *= 2) {
      options.push(i);
    }

    return options.length === 0 ? [4] : options;
  }, [categoryLength]);


  return (
    <div className="products">
      <div className="products__subtitle">
        {visibleProducts && `${categoryLength} models`}
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
                searchParams.set('sortBy', target.value);
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
              searchParams.set('perPage', target.value);
              searchParams.set('page', String(1));
              history.push({
                search: searchParams.toString(),
              });
            }}
            className="products__filter-select"
          >
            <option
              value={categoryLength}
            >
              All
            </option>
            {perPageOptions.map(show => (
              <option key={show}>
                {show}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="products__list">
        {visibleProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {categoryLength !== visibleProducts.length && (
        <Pagination
          total={categoryLength}
          perPage={perPage}
          page={page}
        />
      )}
    </div>
  );
};

export default ProductsList;
