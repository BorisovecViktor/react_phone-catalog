import React, { useState, useRef } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './Search.scss';
import { setSearchQuery } from '../store/search';

type Props = {
  currentLocation: string;
};

const Search: React.FC<Props> = ({ currentLocation }) => {
  const [query, setQuery] = useState('');
  const inputEl = useRef<HTMLInputElement>(null);
  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const dispatch = useDispatch();

  return (
    <div className="header__search search">
      <input
        className="search__input"
        ref={inputEl}
        value={query}
        type="text"
        onChange={e => {
          setQuery(e.currentTarget.value);
          dispatch(setSearchQuery(e.currentTarget.value));
          searchParams.set('query', e.currentTarget.value);
          history.push({
            search: searchParams.toString(),
          });
        }}
        placeholder={`Search in ${currentLocation}...`}
      />
      {query.length > 0 ? (
        <button
          className="search__delete-btn"
          type="button"
          onClick={() => {
            setQuery('');
            searchParams.delete('query');
            history.push({
              search: searchParams.toString(),
            });
            if (inputEl && inputEl.current) {
              inputEl.current.focus();
            }
          }}
        >
          {' '}
        </button>
      ) : (
          <span className="search__icon" />
        )}

    </div>
  );
};

export default Search;
