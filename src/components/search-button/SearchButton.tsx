import { FC } from 'react';
import { FaUser } from 'react-icons/fa';
import { SetURLSearchParams } from 'react-router-dom';

type Props = {
  query: string;
  setSearchParams: SetURLSearchParams;
};

const SearchButton: FC<Props> = ({ query, setSearchParams }) => {
  const setUserSearchParams = () => {
    setSearchParams({ q: query });
  };

  return (
    <button
      type="button"
      aria-label="Search"
      onClick={setUserSearchParams}
      className="absolute left-0 top-full w-full bg-clr-bg text-left lg:justify-center"
    >
      <span className="mx-auto flex h-full max-w-[1100px]  items-center gap-2 p-6 hover:bg-clr-bg-muted active:bg-clr-bg-muted">
        <FaUser />
        People with &quot;{query}&quot;
      </span>
    </button>
  );
};
export default SearchButton;
