import { IoArrowBack } from 'react-icons/io5';
import { SearchInput } from '../search-input';

const Header = () => (
    <header className="flex h-16 items-center justify-between bg-blue-500 px-4">
      <IoArrowBack size={20} className="text-clr-text" />
      <SearchInput />
    </header>
  );
export default Header;
