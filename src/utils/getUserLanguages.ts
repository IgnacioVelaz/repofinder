import RepoEdgeInterface from '../interfaces/RepoEdgeInterface';
import removeDuplicates from './removeDuplicates';

const getUserLanguages = (userEdges: RepoEdgeInterface[]) => {
  const userLanguages = userEdges.map(({ node }) => node.primaryLanguage?.name);
  const uniqueLanguages = removeDuplicates(userLanguages);
  return uniqueLanguages;
};

export default getUserLanguages;
