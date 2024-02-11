import { ChangeEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchInput = () => {
  const [query, setQuery] = useState('');
  const [, setSearchParams] = useSearchParams();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const setUserSearchParams = () => {
    setSearchParams({ q: query });
  };

  return (
    <>
      <input
        value={query}
        onChange={onChange}
        type="search"
        placeholder="Find in GitHub"
        className="mx-auto border-b-2 border-black bg-transparent"
      />
      <button type="button" onClick={setUserSearchParams}>
        Search {query} in People.
      </button>
    </>
  );
};

export default SearchInput;
