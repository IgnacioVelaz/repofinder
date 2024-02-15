import { useQuery } from '@apollo/client';
import { FC, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GET_REPOS } from '../../services';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import useLoadMore from '../../hooks/useLoadMore';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import ReposList from './ReposList';
import RepoEdgeInterface from '../../interfaces/RepoEdgeInterface';

type Props = {
  userLogin: string;
};

const ReposListWithData: FC<Props> = ({ userLogin }) => {
  const [searchParam] = useSearchParams();
  const repoSearchParam = searchParam.get('q') || '';
  const searchQuery = `user:${userLogin} sort:updated-desc`;

  const { loading, error, data, fetchMore } = useQuery(GET_REPOS, {
    variables: { searchQuery, first: 15 },
  });
  const [lastItem] = useIntersectionObserver();
  const [isLoadingMore, loadMore] = useLoadMore(data, fetchMore);

  useEffect(() => {
    if (
      !loading &&
      data &&
      data.search.edges.length > 0 &&
      data.search.pageInfo.hasNextPage
    ) {
      loadMore();
    }
  }, [data]);

  if (loading && !isLoadingMore) return <LoadingSpinner />;
  if (error) return <p>Error: {error.message}</p>;

  const repos = data.search.edges;

  const filteredRepos = repos.filter(({ node }: RepoEdgeInterface) =>
    node.name.includes(repoSearchParam),
  );

  return (
    <>
      <ReposList repos={filteredRepos} lastItem={lastItem} />
      {isLoadingMore && <LoadingSpinner />}
    </>
  );
};
export default ReposListWithData;
