import { FC, RefObject } from 'react';
import { RepoItem } from '../repo-item';
import { RepoInterface } from '../../interfaces/RepoInterface';

type RepoType = {
  // eslint-disable-next-line react/no-unused-prop-types
  node: RepoInterface;
};

type Props = {
  repos: RepoType[];
  lastItem: RefObject<HTMLLIElement>;
};

const ReposList: FC<Props> = ({ repos, lastItem }) => (
    <ul>
      {repos.map(
        ({ node }: RepoType, index: number) =>
          node && (
            <RepoItem
              repo={node}
              key={node.url}
              reference={index === repos.length - 1 ? lastItem : null}
            />
          ),
      )}
    </ul>
  );

export default ReposList;
