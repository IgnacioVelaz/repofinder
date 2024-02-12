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
      className="absolute left-0 top-full flex w-full items-center gap-2 bg-clr-bg p-6 text-left"
    >
      <FaUser />
      People with &quot;{query}&quot;
    </button>
  );
};
export default SearchButton;
