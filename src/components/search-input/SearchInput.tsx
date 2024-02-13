import { ChangeEvent, FC } from 'react';

type Props = {
  query: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const SearchInput: FC<Props> = ({ query, onChange, placeholder }) => (
  <input
    value={query}
    onChange={onChange}
    type="search"
    placeholder={placeholder}
    className="relative mx-auto h-[80%] w-[80%] border-b border-clr-text-muted bg-transparent px-4 focus-visible:outline-none"
  />
);
export default SearchInput;
