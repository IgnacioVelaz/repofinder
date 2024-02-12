import UserInterface from './UserInterface';

interface PageInfo {
  __typename: string;
  endCursor: string;
  hasNextPage: boolean;
}

interface Edge {
  __typename: string;
  node: UserInterface;
}

interface Search {
  __typename: string;
  edges: Edge[];
  pageInfo: PageInfo;
}

interface UserDataInterface {
  search: Search;
}

export default UserDataInterface;
