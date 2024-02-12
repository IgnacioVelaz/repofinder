import { ChangeEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const SearchInput = () => {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const setUserSearchParams = () => {
    setSearchParams({ q: query });
  };

  const isSearching = searchParams.get('q');

  return (
    <>
      <input
        value={query}
        onChange={onChange}
        type="search"
        placeholder="Find in RepoFinder"
        className="relative mx-auto h-[80%] w-[80%] border-b border-clr-text-muted bg-transparent px-4 focus-visible:outline-none"
      />
      {query && !isSearching && (
        <button
          type="button"
          aria-label="Search"
          onClick={setUserSearchParams}
          className="absolute left-0 top-full flex w-full items-center gap-2 bg-clr-bg p-6 text-left"
        >
          <FaUser />
          People with &quot;{query}&quot;
        </button>
      )}
    </>
  );
};

export default SearchInput;
