import { useQuery } from '@apollo/client';
import { FC, useEffect } from 'react';
import { GET_USERS } from '../../services/githubAPI';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import useLoadMore from '../../hooks/useLoadMore';
import UsersList from './UsersList';

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

  console.log(users);

  return (
    <>
      <UsersList users={users} lastItem={lastItem} />
      {isLoadingMore && <LoadingSpinner />}
    </>
  );
};

export default UsersListWithData;
