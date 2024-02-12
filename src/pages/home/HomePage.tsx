import { useSearchParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import UsersListWithData from '../../components/users-list/UsersListWithData';

const HomePage = () => {
  const [searchParams] = useSearchParams();

  const userSearchParam = searchParams.get('q');

  return (
    <>
      <Header />
      {userSearchParam && <UsersListWithData searchQuery={userSearchParam} />}
    </>
  );
};
export default HomePage;
