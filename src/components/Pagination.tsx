import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './Pagination.scss';
import classNames from 'classnames';
import { useHistory, useLocation } from 'react-router-dom';

type Props = {
  total: number;
  perPage: number;
  page: number;
};

const Pagination: React.FC<Props> = ({ page, total, perPage }) => {
  const pagesCount = Math.ceil(total / perPage);
  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const moveToPage = (pageNumber: number) => {
    searchParams.set('page', String(pageNumber));
    history.push({ search: searchParams.toString() });
  };

  const pagesOptions = [...Array.from({ length: pagesCount }, (_e, i) => i + 1)];

  return (
    <div className="pagination">
      <button
        type="button"
        className={
          classNames(
            'pagination__button',
            'pagination__button--prev',
            { 'pagination__button--active': page === 1 },
          )
        }
        disabled={page === 1}
        onClick={() => moveToPage(page - 1)}
      >
        {' '}
      </button>
      {
        pagesOptions.map(pageNumber => (
          <button
            type="button"
            className={
              classNames(
                'pagination__button-page',
                { 'pagination__button-page--active': pageNumber === page },
              )
            }
            key={uuidv4()}
            onClick={() => moveToPage(pageNumber)}
            disabled={pageNumber === page}
          >
            {pageNumber}
          </button>
        ))
      }
      <button
        type="button"
        className={
          classNames(
            'pagination__button',
            'pagination__button--next',
            { 'pagination__button--active': page === pagesOptions.length },
          )
        }
        onClick={() => moveToPage(page + 1)}
        disabled={page === pagesOptions.length}
      >
        {' '}
      </button>
    </div>
  );
};

export default Pagination;
