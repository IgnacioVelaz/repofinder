import { useQuery } from '@apollo/client';
import { FC, useEffect } from 'react';
import { GET_USERS } from '../../services/githubAPI';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import useLoadMore from '../../hooks/useLoadMore';
import UsersList from './UsersList';
import UserEdgeInterface from '../../interfaces/UserEdgeInterface';

type props = {
  searchQuery: string;
};

const UsersListWithData: FC<props> = ({ searchQuery }) => {
  const { loading, error, data, fetchMore } = useQuery(GET_USERS, {
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

  const users = data.search.edges;

  const cleanedUpUsers = users.filter(
    // eslint-disable-next-line no-underscore-dangle
    ({ node }: UserEdgeInterface) => node.__typename === 'User',
  );

  return (
    <>
      <UsersList users={cleanedUpUsers} lastItem={lastItem} />
      {isLoadingMore && <LoadingSpinner />}
    </>
  );
};

export default UsersListWithData;
