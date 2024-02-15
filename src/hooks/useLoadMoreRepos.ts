import { useState } from 'react';
import { ApolloQueryResult } from '@apollo/client';
import UserDataInterface from '../interfaces/UserDataInterface';

type FetchMoreArgs = {
  variables: {
    after: string;
    first: number;
  };
  updateQuery: (
    prev: UserDataInterface,
    { fetchMoreResult }: { fetchMoreResult: UserDataInterface },
  ) => UserDataInterface;
};

const useLoadMoreRepos = (
  data: UserDataInterface,
  fetchMore: (
    options: FetchMoreArgs,
  ) => Promise<ApolloQueryResult<UserDataInterface>>,
): [boolean, () => void] => {
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const loadMore = () => {
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

  return [isLoadingMore, loadMore];
};

export default useLoadMoreRepos;
