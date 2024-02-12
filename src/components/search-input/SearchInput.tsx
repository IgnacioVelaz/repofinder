import { ChangeEvent, FC } from 'react';

type Props = {
  query: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput: FC<Props> = ({ query, onChange }) => (
    <input
      value={query}
      onChange={onChange}
      type="search"
      placeholder="Find in RepoFinder"
      className="relative mx-auto h-[80%] w-[80%] border-b border-clr-text-muted bg-transparent px-4 focus-visible:outline-none"
    />
  );
export default SearchInput;
