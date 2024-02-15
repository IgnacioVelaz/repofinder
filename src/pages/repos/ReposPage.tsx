import { useParams, useSearchParams } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';
import { ChangeEvent } from 'react';
import { BackArrow } from '../../components/back-arrow';
import Header from '../../components/header/Header';
import { ReposListWithData } from '../../components/repos-list';
import { SearchInput } from '../../components/search-input';

const ReposPage = () => {
  const { user: userLogin } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const repoSearchParam = searchParams.get('q');

  const enableSearch = () => {
    setSearchParams({ q: '' });
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('q', event.target.value);
    setSearchParams(newSearchParams.toString(), { replace: true });
  };

  if (!userLogin)
    return (
      <p>An error occurred. Can&apos;t get user name. Please try again later</p>
    );

  return (
    <>
      <Header>
        <BackArrow />
        {repoSearchParam === null && (
          <>
            <div>
              <p className="text-sm text-clr-text-muted">{userLogin}</p>
              <h2 className="text-xl font-bold">Repositories</h2>
            </div>
            <button
              className="ml-auto p-2"
              onClick={enableSearch}
              aria-label="Search"
              type="button"
            >
              <IoSearchOutline className="text-clr-accent ml-auto size-6" />
            </button>
          </>
        )}
        {repoSearchParam !== null && (
          <SearchInput
            placeholder="Find repo"
            query={repoSearchParam}
            onChange={onChange}
          />
        )}
      </Header>
      <main className="bg-clr-bg p-4">
        <ReposListWithData userLogin={userLogin} />
      </main>
    </>
  );
};

export default ReposPage;
