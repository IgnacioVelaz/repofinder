import { useQuery } from '@apollo/client';
import { FC, useEffect, useRef, useState } from 'react';
import { GET_USERS } from '../../services/githubAPI';
import UserInterface from '../../interfaces/UserInterface';
import { UserItem } from '../user-item';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';

type props = {
  searchQuery: string;
};

type UserType = {
  // eslint-disable-next-line react/no-unused-prop-types
  node: UserInterface;
};

const UsersListWithData: FC<props> = ({ searchQuery }) => {
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const lastItem = useRef<HTMLLIElement>(null);
  const [lastItemIsVisible, setLastItemIsVisible] = useState<boolean>();

  const observer = useRef(
    new IntersectionObserver((entries) => {
      const entry = entries[0];
      setLastItemIsVisible(entry.isIntersecting);
    }),
  );

  const { loading, error, data, fetchMore } = useQuery(GET_USERS, {
    variables: { searchQuery, first: 10 },
  });

  useEffect(() => {
    if (!loading && data && data.search.edges.length > 0 && lastItem.current) {
      observer.current.observe(lastItem.current);
    }
  }, [data]);

  const loadMoreUsers = () => {
    setIsLoadingMore(true);
    if (data.search.pageInfo.hasNextPage) {
      fetchMore({
        variables: {
          after: data.search.pageInfo.endCursor,
          first: 10,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          setIsLoadingMore(false);
          return {
            search: {
              ...fetchMoreResult.search,
              edges: [...prev.search.edges, ...fetchMoreResult.search.edges],
            },
          };
        },
      });
    }
  };

  useEffect(() => {
    if (
      lastItem.current &&
      lastItemIsVisible &&
      data.search.pageInfo.hasNextPage
    ) {
      observer.current.unobserve(lastItem.current);
      loadMoreUsers();
    }
  }, [lastItemIsVisible]);

  if (loading && !isLoadingMore) return <LoadingSpinner />;
  if (error) return <p>Error: {error.message}</p>;

  const users = data.search.edges;

  return (
    <>
      <ul>
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
