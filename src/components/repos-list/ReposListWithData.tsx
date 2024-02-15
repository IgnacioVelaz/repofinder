import { useQuery } from '@apollo/client';
import { FC, useEffect } from 'react';
import { GET_REPOS } from '../../services';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import useLoadMore from '../../hooks/useLoadMore';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import ReposList from './ReposList';

type Props = {
  userLogin: string;
};

const ReposListWithData: FC<Props> = ({ userLogin }) => {
  const searchInputValue = '';
  const language = 'javascript';
  const searchQuery = `${searchInputValue} user:${userLogin} language:${language} sort:updated-desc`;

  const { loading, error, data, fetchMore } = useQuery(GET_REPOS, {
    variables: { searchQuery, first: 10 },
  });

  const [lastItem, lastItemIsVisible, observer] = useIntersectionObserver();
  const [isLoadingMore, loadMore] = useLoadMore(data, fetchMore);

  useEffect(() => {
    if (!loading && data && data.search.edges.length > 0 && lastItem.current) {
      observer.current.observe(lastItem.current);
    }
  }, [data]);

  useEffect(() => {
    if (
      lastItem.current &&
      lastItemIsVisible &&
      data.search.pageInfo.hasNextPage
    ) {
      observer.current.unobserve(lastItem.current);

      loadMore();
    }
  }, [lastItemIsVisible]);

  if (loading && !isLoadingMore) return <LoadingSpinner />;
  if (error) return <p>Error: {error.message}</p>;

  const repos = data.search.edges;

  return (
    <>
      <ReposList repos={repos} lastItem={lastItem} />
      {isLoadingMore && <LoadingSpinner />}
    </>
  );
};
export default ReposListWithData;
