import { FC } from 'react';
import UserInterface from '../../interfaces/UserInterface';
import { UserItem } from '../user-item';

type UserType = {
  // eslint-disable-next-line react/no-unused-prop-types
  node: UserInterface;
};

type Props = {
  users: UserType[];
  lastItem: React.RefObject<HTMLLIElement>;
};

const UsersList: FC<Props> = ({ users, lastItem }) => (
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
  );

export default UsersList;
