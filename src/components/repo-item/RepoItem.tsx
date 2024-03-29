import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa6';
import { RepoInterface } from '../../interfaces/RepoInterface';

type Props = {
  repo: RepoInterface;
};

const RepoItem: FC<Props> = ({ repo }) => {
  const { url, name, description, primaryLanguage, stargazerCount } = repo;

  return (
    <Link to={url} target="_blank">
      <li className="active:bg-lr-bg-muted flex flex-col gap-2 border-b border-clr-bg-muted px-2 py-4 hover:bg-clr-bg-muted lg:flex-row">
        <h3 className="font-bold">{name}</h3>
        <p className="truncate text-clr-text-muted lg:order-2">{description}</p>
        <div className="flex items-center gap-2 text-clr-text-muted">
          <FaStar className="text-yellow-500" />
          <p>{stargazerCount}</p>
          {primaryLanguage && (
            <>
              <div
                className="h-4 w-4 rounded-full"
                style={{ backgroundColor: primaryLanguage.color }}
              />
              <p>{primaryLanguage.name}</p>
            </>
          )}
        </div>
      </li>
    </Link>
  );
};
export default RepoItem;
