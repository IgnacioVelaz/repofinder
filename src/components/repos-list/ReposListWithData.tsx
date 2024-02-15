import { useQuery } from '@apollo/client';
import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { RxCaretDown } from 'react-icons/rx';
import { GET_REPOS } from '../../services';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import useLoadMore from '../../hooks/useLoadMore';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import ReposList from './ReposList';
import RepoEdgeInterface from '../../interfaces/RepoEdgeInterface';
import getUserLanguages from '../../utils/getUserLanguages';
import { Modal } from '../modal';
import { LanguagesList } from '../languages-list';

type Props = {
  userLogin: string;
};

const ReposListWithData: FC<Props> = ({ userLogin }) => {
  const [searchParam] = useSearchParams();
  const repoSearchParam = searchParam.get('q') || '';
  const searchQuery = `user:${userLogin} sort:updated-desc`;
  const [allReposLoaded, setAllReposLoaded] = useState(false);
  const [userLanguages, setUserLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { loading, error, data, fetchMore } = useQuery(GET_REPOS, {
    variables: { searchQuery, first: 15 },
  });
  const [lastItem] = useIntersectionObserver();
  const [isLoadingMore, loadMore] = useLoadMore(data, fetchMore);

  const closeModal = () => setIsModalVisible(false);
  const openModal = () => setIsModalVisible(true);

  useEffect(() => {
    if (
      !loading &&
      data &&
      data.search.edges.length > 0 &&
      data.search.pageInfo.hasNextPage
    ) {
      loadMore();
    }
    if (
      !loading &&
      data &&
      data.search.edges.length > 0 &&
      data.search.pageInfo.hasNextPage === false
    ) {
      setAllReposLoaded(true);
    }
  }, [data]);

  useEffect(() => {
    if (allReposLoaded) {
      setUserLanguages(getUserLanguages(data.search.edges));
    }
  }, [allReposLoaded]);

  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    closeModal();
  };

  if (loading && !isLoadingMore) return <LoadingSpinner />;
  if (error) return <p>Error: {error.message}</p>;

  const repos = data.search.edges;

  const queryFilteredRepos = repos.filter(({ node }: RepoEdgeInterface) =>
    node.name.includes(repoSearchParam),
  );

  const languageFilteredRepos =
    selectedLanguage.length > 0
      ? queryFilteredRepos.filter(
          ({ node }: RepoEdgeInterface) =>
            node.primaryLanguage?.name === selectedLanguage,
        )
      : queryFilteredRepos;

  return (
    <>
      <button
        className="mb-6 flex items-center gap-2 rounded-full bg-clr-bg-muted px-4 py-2 text-sm"
        type="button"
        onClick={openModal}
      >
        {selectedLanguage.length > 0 ? selectedLanguage : 'Language'}
        <RxCaretDown size={20} />
      </button>
      <ReposList repos={languageFilteredRepos} lastItem={lastItem} />
      {isLoadingMore && <LoadingSpinner />}
      {isModalVisible && (
        <Modal title="Select language" closeModal={closeModal}>
          {userLanguages && (
            <LanguagesList
              languages={userLanguages}
              selectLanguage={selectLanguage}
            />
          )}
        </Modal>
      )}
    </>
  );
};
export default ReposListWithData;
