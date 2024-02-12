import { useSearchParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import UsersListWithData from '../../components/users-list/UsersListWithData';
import { BackArrow } from '../../components/back-arrow';
import SearchBox from '../../components/search-box/SearchBox';

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const userSearchParam = searchParams.get('q');

  return (
    <>
      <Header>
        {userSearchParam ? (
          <>
            <BackArrow />
            <h2 className="mr-auto text-2xl font-bold">People</h2>
          </>
        ) : (
          <SearchBox />
        )}
      </Header>
      <main>
        {userSearchParam ? (
          <UsersListWithData searchQuery={userSearchParam} />
        ) : (
          <div className="mx-auto flex h-[calc(100vh-4rem)] max-w-[80%] flex-col items-center justify-center gap-8 text-center">
            <h2 className="text-3xl font-bold">Find people.</h2>
            <p>
              Find people in RepoFinder. <br /> Repositories, organizations and
              issues coming soon.
            </p>
          </div>
        )}
      </main>
    </>
  );
};
export default HomePage;
