import { FC, RefObject } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa6';
import { RepoInterface } from '../../interfaces/RepoInterface';

type Props = {
  repo: RepoInterface;
  reference: RefObject<HTMLLIElement> | null;
};

const RepoItem: FC<Props> = ({ repo, reference }) => {
  const { url, name, description, primaryLanguage, stargazerCount } = repo;
  const { color: languageColor, name: languageName } = primaryLanguage;

  return (
    <Link to={url}>
      <li
        className="flex flex-col gap-2 border-b border-clr-bg-muted py-4"
        ref={reference}
      >
        <h3 className="font-bold">{name}</h3>
        <p className="text-clr-text-muted">{description}</p>
        <div className="flex items-center gap-2 text-clr-text-muted">
          <FaStar className="text-yellow-500" />
          <p>{stargazerCount}</p>
          <div
            className="h-4 w-4 rounded-full"
            style={{ backgroundColor: languageColor }}
          />
          <p>{languageName}</p>
        </div>
      </li>
    </Link>
  );
};
export default RepoItem;