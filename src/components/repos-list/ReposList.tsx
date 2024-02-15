import { FC } from 'react';
import { RepoItem } from '../repo-item';
import { RepoInterface } from '../../interfaces/RepoInterface';

type RepoType = {
  // eslint-disable-next-line react/no-unused-prop-types
  node: RepoInterface;
};

type Props = {
  repos: RepoType[];
};

const ReposList: FC<Props> = ({ repos }) => {
  console.log('REPOS', repos);

  return (
    <ul>
      {repos.map(
        ({ node }: RepoType) => node && <RepoItem repo={node} key={node.url} />,
      )}
    </ul>
  );
};
export default ReposList;
