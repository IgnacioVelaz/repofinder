import { useSearchParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import { UsersList } from '../../components/users-list';

const HomePage = () => {
  const [searchParams] = useSearchParams();

  const userSearchParam = searchParams.get('q');

  return (
    <>
      <Header />
      {userSearchParam && <UsersList searchQuery={userSearchParam} />}
    </>
  );
};
export default HomePage;
