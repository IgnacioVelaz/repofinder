import { useQuery } from '@apollo/client';
import { FC, useEffect } from 'react';
import { GET_USERS } from '../../services/githubAPI';
import UserInterface from '../../interfaces/UserInterface';
import { UserItem } from '../user-item';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import useLoadMore from '../../hooks/useLoadMore';

type props = {
  searchQuery: string;
};

type UserType = {
  // eslint-disable-next-line react/no-unused-prop-types
  node: UserInterface;
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

  return (
    <>
      <ul className="bg-clr-bg">
        {users.map(
          ({ node }: UserType, index: number) =>
            node.login && (
              <UserItem
                user={node}
                key={node.login}
                reference={index === users.length - 1 ? lastItem : null}
              />
            ),
        )}
      </ul>
      {isLoadingMore && <LoadingSpinner />}
    </>
  );
};

export default UsersListWithData;
