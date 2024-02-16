import { ChangeEvent, FC, useEffect, useRef } from 'react';

type Props = {
  query: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const SearchInput: FC<Props> = ({ query, onChange, placeholder }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <input
      value={query}
      onChange={onChange}
      type="search"
      placeholder={placeholder}
      className="relative mx-auto h-[80%] w-[80%] max-w-[1100px] border-b border-clr-text-muted bg-transparent 
      px-4 caret-clr-accent focus-visible:border-clr-accent focus-visible:outline-none"
      ref={inputRef}
    />
  );
};
export default SearchInput;
