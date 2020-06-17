import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './Search.scss';
import { setSearchQuery } from '../store/search';
import { debounce } from '../helpers/debounce';

type Props = {
  currentLocation: string;
};

const Search: React.FC<Props> = ({ currentLocation }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const inputEl = useRef<HTMLInputElement>(null);
  const searchParams = new URLSearchParams(location.search);
  const [query, setQuery] = useState(searchParams.get('search') || '');

  const handleSearchInput = useCallback(debounce((value: string) => {
    if (value) {
      searchParams.set('query', value);
    } else {
      searchParams.delete('query');
    }

    dispatch(setSearchQuery(value));
    history.push({
      search: searchParams.toString(),
    });
  }, 300), []);

  useEffect(() => {
    handleSearchInput(query);
  }, [query, handleSearchInput]);

  useEffect(() => {
    setSearchQuery('');
    setQuery('');
  }, [currentLocation]);

  return (
    <div className="header__search search">
      <input
        className="search__input"
        ref={inputEl}
        value={query}
        type="text"
        onChange={e => {
          handleSearchInput(e.currentTarget.value);
          setQuery(e.currentTarget.value);
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
