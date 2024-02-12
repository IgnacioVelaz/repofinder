import { FC, RefObject } from 'react';
import { Link } from 'react-router-dom';
import UserInterface from '../../interfaces/UserInterface';

type props = {
  user: UserInterface;
  reference: RefObject<HTMLLIElement> | null;
};

const UserItem: FC<props> = ({ user, reference }) => (
  <Link to={`/user/${user.login}`}>
    <li className="flex gap-4 p-4" ref={reference}>
      <img
        src={user.avatarUrl}
        alt={`${user.name} avatar`}
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col gap-2">
        <p className="font-bold">{user.name}</p>
        <p className="text-sm text-clr-text-muted">{user.login}</p>
        <p>{user.bio}</p>
      </div>
    </li>
  </Link>
);
export default UserItem;
