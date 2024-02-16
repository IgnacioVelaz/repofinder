import { FC, RefObject } from 'react';
import { Link } from 'react-router-dom';
import UserInterface from '../../interfaces/UserInterface';

type props = {
  user: UserInterface;
  reference: RefObject<HTMLLIElement> | null;
};

const UserItem: FC<props> = ({ user, reference }) => (
  <Link to={`/user/${user.login}`}>
    <li
      className="flex gap-4 border-clr-bg-muted p-4 hover:bg-clr-bg-muted active:bg-clr-bg-muted lg:border-b"
      ref={reference}
    >
      <img
        src={user.avatarUrl}
        alt={`${user.name} avatar`}
        className="h-10 w-10 rounded-full lg:h-20 lg:w-20"
      />
      <div className="flex flex-col gap-2 truncate">
        <p className="truncate font-bold lg:text-xl">{user.name}</p>
        <p className="truncate text-sm text-clr-text-muted">{user.login}</p>
        <p className="truncate">{user.bio}</p>
      </div>
    </li>
  </Link>
);
export default UserItem;
