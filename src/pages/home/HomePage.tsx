import { useSearchParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import UsersListWithData from '../../components/users-list/UsersListWithData';
import { BackArrow } from '../../components/back-arrow';
import SearchBox from '../../components/search-box/SearchBox';
import EmptyPageText from '../../components/empty-page-text/EmptyPageText';
import ShareURLButton from '../../components/share-url-button/ShareURLButton';

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const userSearchParam = searchParams.get('q');

  return (
    <>
      <Header>
        {userSearchParam ? (
          <div className="mx-auto flex h-full w-full max-w-[1100px] items-center gap-4 border-clr-bg-muted lg:border-b">
            <BackArrow />
            <h2 className=" mr-auto text-2xl font-bold">People</h2>
            <ShareURLButton />
          </div>
        ) : (
          <SearchBox />
        )}
      </Header>
      <main>
        {userSearchParam ? (
          <UsersListWithData searchQuery={userSearchParam} />
        ) : (
          <EmptyPageText
            title="Find people."
            text="Find people in RepoFindr. Repositories, organizations and
        issues coming soon."
          />
        )}
      </main>
    </>
  );
};
export default HomePage;
