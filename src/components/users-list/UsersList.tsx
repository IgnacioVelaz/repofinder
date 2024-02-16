import { FC, RefObject } from 'react';
import UserInterface from '../../interfaces/UserInterface';
import { UserItem } from '../user-item';

type UserType = {
  // eslint-disable-next-line react/no-unused-prop-types
  node: UserInterface;
};

type Props = {
  users: UserType[];
  lastItem: RefObject<HTMLLIElement>;
};

const UsersList: FC<Props> = ({ users, lastItem }) => (
  <div className="bg-clr-bg">
    <ul className="mx-auto w-full max-w-[1100px]">
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
  </div>
);

export default UsersList;
