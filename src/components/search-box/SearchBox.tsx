import { ChangeEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchButton } from '../search-button';
import { SearchInput } from '../search-input';

const SearchBox = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const isSearching = searchParams.get('q');

  return (
    <>
      <SearchInput
        query={query}
        onChange={onChange}
        placeholder="Find in RepoFindr"
      />
      {query && !isSearching && (
        <SearchButton query={query} setSearchParams={setSearchParams} />
      )}
    </>
  );
};

export default SearchBox;
