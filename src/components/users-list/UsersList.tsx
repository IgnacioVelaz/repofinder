import { useQuery } from '@apollo/client';
import { FC } from 'react';
import { GET_USERS } from '../../services/githubAPI';
import UserInterface from '../../interfaces/UserInterface';
import { UserItem } from '../user-item';

type props = {
  searchQuery: string;
};

const UsersList: FC<props> = ({ searchQuery }) => {
  const { loading, error, data } = useQuery(GET_USERS, {
    variables: { searchQuery },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.search.nodes.map(
        (user: UserInterface) =>
          user.login && <UserItem user={user} key={user.login} />,
      )}
    </ul>
  );
};

export default UsersList;
