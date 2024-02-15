import { useParams } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';
import { BackArrow } from '../../components/back-arrow';
import Header from '../../components/header/Header';
import { ReposListWithData } from '../../components/repos-list';

const ReposPage = () => {
  const { user: userLogin } = useParams();

  if (!userLogin)
    return (
      <p>An error occurred. Can&apos;t get user name. Please try again later</p>
    );

  return (
    <>
      <Header>
        <BackArrow />
        <div>
          <p className="text-sm text-clr-text-muted">{userLogin}</p>
          <h2 className="text-xl font-bold">Repositories</h2>
        </div>
        <IoSearchOutline className="text-clr-accent ml-auto size-6" />
      </Header>
      <main className="bg-clr-bg p-4">
        <ReposListWithData userLogin={userLogin} />
      </main>
    </>
  );
};

export default ReposPage;
