/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useMemo, useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

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

const sortByTitles: SortTitles = {
  priceAsc: 'Price: Low to High',
  priceDesc: 'Price: High to Low',
  hotPrice: 'Hot Prices',
  newModels: 'Newest Arrivals',
};


const ProductsList: React.FC<Props> = ({ filter }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const categoryLength = useSelector(store.getCategoryLength);
  const searchParams = new URLSearchParams(location.search);
  const sortBy = searchParams.get('sortBy') || SORT_BY.newModels;
  const perPage = +(searchParams.get('perPage') || categoryLength);
  const visibleProducts = useSelector(store.getVisibleProducts);
  const page = +(searchParams.get('page') || 1);
  const searchQuery = useSelector(store.getSearchQuery);
  const [showSortBy, setShowSortBy] = useState(false);
  const [showPerPage, setShowPerPage] = useState(false);

  if (page > categoryLength / perPage) {
    searchParams.set('page', String(1));
    history.push({
      search: searchParams.toString(),
    });
  }

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

  const sortByHandler = (sortType: string) => {
    if (showSortBy) {
      dispatch(setSortBy(sortType));
      setShowSortBy(false);
      searchParams.set('sortBy', sortType);
      searchParams.set('page', String(1));
      history.push({
        search: searchParams.toString(),
      });
    }
  };

  const handlePerPage = (perPageOption: number) => {
    if (showPerPage) {
      dispatch(setPerPage(perPageOption));
      setShowPerPage(false);
      searchParams.set('perPage', String(perPageOption));
      searchParams.set('page', String(1));
      history.push({
        search: searchParams.toString(),
      });
    }
  };

  return (
    <div className="products">
      <div className="products__subtitle">
        {
          (visibleProducts && searchQuery === '')
            ? `${categoryLength} models`
            : `${visibleProducts.length} results`
        }
      </div>
      {(searchQuery === '' && visibleProducts.length !== 0) && (
        <div className="products__filters">
          <div className="products__filter">
            <div className="products__filter-title">
              Sort by
            </div>
            <div
              className={classNames(
                'products__dropdown',
                { 'products__dropdown--active': showSortBy },
              )}
              onClick={() => setShowSortBy(!showSortBy)}
            >
              {sortByTitles[sortBy]}
            </div>
            <ul
              className={classNames(
                'products__dropdown-list',
                { 'products__dropdown-list--active': showSortBy },
              )}
            >
              {Object.values(SORT_BY).map(sortType => (
                <li
                  className={classNames(
                    'products__dropdown-item',
                    { 'products__dropdown-item--active': sortType === sortBy },
                  )}
                  onClick={() => sortByHandler(sortType)}
                  key={sortType}
                >
                  {sortByTitles[sortType]}
                </li>
              ))}
            </ul>
          </div>
          <div className="products__filter">
            <div className="products__filter-title">
              Items on page
            </div>
            <div
              className={classNames(
                'products__dropdown',
                { 'products__dropdown--active': showPerPage },
              )}
              onClick={() => setShowPerPage(!showPerPage)}
            >
              {categoryLength === visibleProducts.length ? 'All' : perPage}
            </div>
            <ul
              className={classNames(
                'products__dropdown-list',
                { 'products__dropdown-list--active': showPerPage },
              )}
            >
              <li
                className={classNames(
                  'products__dropdown-item',
                  { 'products__dropdown-item--active': categoryLength === visibleProducts.length },
                )}
                onClick={() => handlePerPage(categoryLength)}
              >
                All
              </li>
              {perPageOptions.map(perPageOption => (
                <li
                  className={classNames(
                    'products__dropdown-item',
                    { 'products__dropdown-item--active': perPageOption === perPage },
                  )}
                  onClick={() => handlePerPage(perPageOption)}
                  key={perPageOption}
                >
                  {perPageOption}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="products__list">
        {visibleProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {(categoryLength !== visibleProducts.length && searchQuery === '') && (
        <Pagination
          total={categoryLength}
          perPage={perPage}
          page={page}
        />
      )}

      {searchQuery !== '' && visibleProducts.length === 0 && (
        <div className="products__search">
          <div className="products__search-title">
            No items were found for
            <span className="products__search-query">
              {` "${searchQuery}"`}
            </span>
          </div>
          <div className="products__search-subtitle">
            Please try another search.
          </div>
        </div>
      )}

      {searchQuery === '' && visibleProducts.length === 0 && (
        <div className="products__message">
          No items in category
        </div>
      )}
    </div>
  );
};

export default ProductsList;
