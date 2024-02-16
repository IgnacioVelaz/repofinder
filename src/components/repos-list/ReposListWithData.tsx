import { useQuery } from '@apollo/client';
import { FC, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GET_REPOS } from '../../services';
import useLoadMore from '../../hooks/useLoadMore';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import ReposList from './ReposList';
import RepoEdgeInterface from '../../interfaces/RepoEdgeInterface';
import getUserLanguages from '../../utils/getUserLanguages';
import { Modal } from '../modal';
import { LanguagesList } from '../languages-list';
import { LanguagesButton } from '../languages-button';
import EmptyPageText from '../empty-page-text/EmptyPageText';

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

  if (repos.length === 0)
    return (
      <EmptyPageText
        title="There's nothing here."
        text="The user doesn't have any public repos."
      />
    );

  const queryFilteredRepos = repos.filter(({ node }: RepoEdgeInterface) =>
    node.name.includes(repoSearchParam.toLowerCase()),
  );

  const languageFilteredRepos =
    selectedLanguage.length > 0
      ? queryFilteredRepos.filter(
          ({ node }: RepoEdgeInterface) =>
            node.primaryLanguage?.name === selectedLanguage,
        )
      : queryFilteredRepos;

  return (
    <div className="mx-auto max-w-[1100px]">
      <LanguagesButton
        openModal={openModal}
        selectedLanguage={selectedLanguage}
        userLanguages={userLanguages}
        allReposLoaded={allReposLoaded}
      />
      {languageFilteredRepos.length === 0 && (
        <EmptyPageText
          title="Change or remove the filters"
          text="There are no results with these filters. Please try something else."
        />
      )}
      <ReposList repos={languageFilteredRepos} />
      {isLoadingMore && <LoadingSpinner />}
      {isModalVisible && (
        <Modal title="Select language" closeModal={closeModal}>
          <LanguagesList
            languages={userLanguages}
            selectLanguage={selectLanguage}
          />
        </Modal>
      )}
    </div>
  );
};
export default ReposListWithData;
